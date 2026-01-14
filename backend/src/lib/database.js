import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectToDatabase = async () => {
  try {
    if (!ENV.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    await mongoose.connect(ENV.MONGODB_URI);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}