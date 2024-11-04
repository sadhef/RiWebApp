// server.js
import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import rootRouter from './routes/index.js';
import chalk from 'chalk';

// Load environment variables
dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env'
});

const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400 // 24 hours
};

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors(corsOptions));

// Request logging middleware
app.use((req, res, next) => {
  console.log(chalk.cyan(`${req.method} ${req.path} [${new Date().toISOString()}]`));
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use('/api', rootRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(chalk.red('Error:'), err);

  // MongoDB errors
  if (err.name === 'MongoError' || err.name === 'MongoServerError') {
    return res.status(500).json({
      success: false,
      message: 'Database error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  }

  // Validation errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: Object.values(err.errors).map(e => e.message)
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }

  // Default error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? {
      stack: err.stack,
      details: err
    } : undefined
  });
});

// Enhanced error handling for uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error(chalk.red('⚠️ Uncaught Exception:'));
  console.error(error);
  
  // Send error to your error tracking service here (e.g., Sentry)
  
  if (process.env.NODE_ENV === 'development') {
    process.exit(1);
  }
});

// Enhanced error handling for unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error(chalk.red('⚠️ Unhandled Rejection:'));
  console.error(error);
  
  // Send error to your error tracking service here (e.g., Sentry)
  
  if (process.env.NODE_ENV === 'development') {
    process.exit(1);
  }
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log(chalk.yellow('SIGTERM received. Performing graceful shutdown...'));
  // Close database connection and other resources
  try {
    await mongoose.connection.close();
    console.log(chalk.green('MongoDB connection closed.'));
    process.exit(0);
  } catch (err) {
    console.error(chalk.red('Error during graceful shutdown:'), err);
    process.exit(1);
  }
});

const PORT = process.env.PORT || 5000;

// Enhanced server startup
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log(chalk.green('✓ MongoDB Connected'));

    // Start server
    const server = app.listen(PORT, () => {
      console.log(chalk.green(`✓ Server running on port ${PORT}`));
      console.log(chalk.cyan(`✓ Environment: ${process.env.NODE_ENV}`));
      console.log(chalk.cyan(`✓ CORS enabled for: ${corsOptions.origin}`));
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
    if (process.env.NODE_ENV === 'development') {
      process.exit(1);
    }
  }
};

// Start the server
startServer().catch((error) => {
  console.error(chalk.red('Server startup failed:'), error);
  process.exit(1);
});

export default app;