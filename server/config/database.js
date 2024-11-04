// config/database.js
import mongoose from "mongoose";
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    // Connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      family: 4,
      retryWrites: true,
      w: 'majority',
      maxPoolSize: 10,
      minPoolSize: 5,
      maxIdleTimeMS: 60000,
      connectTimeoutMS: 30000
    };

    // Create connection
    const conn = await mongoose.connect(mongoURI, options);

    // Log success
    console.log(chalk.green('✓ MongoDB Connected:', chalk.blue(conn.connection.host)));

    // Handle connection events
    mongoose.connection.on('connected', () => {
      console.log(chalk.green('✓ MongoDB connection established'));
    });

    mongoose.connection.on('error', (err) => {
      console.error(chalk.red('MongoDB connection error:'), err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log(chalk.yellow('MongoDB disconnected'));
    });

    return conn;

  } catch (error) {
    console.error(chalk.red('MongoDB connection error:'), error.message);
    if (process.env.NODE_ENV === 'development') {
      console.error(chalk.red('Full error:'), error);
    }
    throw error;
  }
};

export default connectDB;