// server.js
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import rootRouter from './routes/index.js';
import chalk from 'chalk';
import cloudinary from './utils/cloudinary.js';
import Razorpay from 'razorpay';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app = express();

// Initialize Razorpay with your credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Enhanced CORS configuration for your specific domains
const corsOptions = {
  origin: [
    'https://rifield-web-appuser-65d9.vercel.app',
    'https://rifield-web-appmanager.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Authorization'],
  maxAge: 86400
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Configure cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Verify JWT token middleware
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    req.token = authHeader.slice(7);
  }
  next();
});

// Enhanced request logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(chalk.cyan(`[${timestamp}] ${req.method} ${req.path}`));
  console.log(chalk.gray('Origin:', req.headers.origin));
  console.log(chalk.gray('Auth:', req.headers.authorization ? 'Present' : 'None'));
  next();
});

// Health check endpoint with detailed service status
app.get('/health', async (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    
    const cloudinaryStatus = await cloudinary.api.ping()
      .then(() => 'connected')
      .catch(() => 'error');

    const razorpayStatus = await razorpay.orders.all({ count: 1 })
      .then(() => 'connected')
      .catch(() => 'error');

    res.status(200).json({
      status: 'ok',
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
      services: {
        database: dbStatus,
        cloudinary: cloudinaryStatus,
        razorpay: razorpayStatus
      },
      urls: {
        client: process.env.CLIENT_URL,
        owner: process.env.OWNER_URL,
        api: process.env.API_URL
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// API routes
app.use('/api', rootRouter);

// 404 handler with improved error messages
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl,
    availableEndpoints: {
      auth: '/api/auth',
      user: '/api/user',
      owner: '/api/owner',
      admin: '/api/admin'
    }
  });
});

// Comprehensive error handler
app.use((err, req, res, next) => {
  console.error(chalk.red('Error:', err));

  // MongoDB errors
  if (err.name === 'MongoError' || err.name === 'MongoServerError') {
    return res.status(500).json({
      success: false,
      message: 'Database error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: err.name === 'TokenExpiredError' ? 'Token has expired' : 'Invalid token'
    });
  }

  // Default error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

const PORT = process.env.PORT || 5000;

// Enhanced server startup
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log(chalk.green('✓ MongoDB Connected'));

    // Verify essential services
    console.log(chalk.yellow('Verifying services...'));

    // Verify Cloudinary
    await cloudinary.api.ping();
    console.log(chalk.green('✓ Cloudinary Connected'));

    // Verify Razorpay
    await razorpay.orders.all({ count: 1 });
    console.log(chalk.green('✓ Razorpay Connected'));

    // Start server
    const server = app.listen(PORT, () => {
      console.log(chalk.green(`✓ Server running on port ${PORT}`));
      console.log(chalk.cyan(`✓ Environment: ${process.env.NODE_ENV}`));
      console.log(chalk.cyan(`✓ API URL: ${process.env.API_URL}`));
      console.log(chalk.cyan(`✓ Client URL: ${process.env.CLIENT_URL}`));
      console.log(chalk.cyan(`✓ Owner URL: ${process.env.OWNER_URL}`));
    });

    // Handle server errors
    server.on('error', (error) => {
      console.error(chalk.red('Server error:'), error);
      if (error.code === 'EADDRINUSE') {
        console.error(chalk.red(`Port ${PORT} is already in use`));
        process.exit(1);
      }
    });

  } catch (error) {
    console.error(chalk.red('Failed to start server:'), error);
    process.exit(1);
  }
};

// Start server with error handling
startServer().catch((error) => {
  console.error(chalk.red('Server startup failed:'), error);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log(chalk.yellow('SIGTERM received. Shutting down gracefully...'));
  try {
    await mongoose.connection.close();
    console.log(chalk.green('✓ MongoDB connection closed'));
    process.exit(0);
  } catch (err) {
    console.error(chalk.red('Error during shutdown:'), err);
    process.exit(1);
  }
});

export default app;