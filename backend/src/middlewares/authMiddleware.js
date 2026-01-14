import { requireAuth } from '@clerk/express';
import User from '../models/userModel.js';

export const protectRoutes = [
  requireAuth(), // Ensure the user is authenticated with Clerk
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId; // Get Clerk user ID from the request
      if (!clerkId) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await User.findOne({ clerkId: clerkId }); // Find user in the database
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      // Attach user to request object and proceed
      req.user = user;
      next();
    } catch (error) {
      console.error('Authentication error:', error);
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
];