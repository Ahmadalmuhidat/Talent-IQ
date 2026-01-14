import express from 'express';
import {
  getChatToken
} from '../controllers/chatController.js';
import { protectRoutes } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/token', protectRoutes, getChatToken);

export default router;