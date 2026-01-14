import express from 'express';
import {
  getSessions,
  getActiveSessions,
  createSession,
  getSessionById,
  joinSession,
  endSession,
  getRecentSessions
} from '../controllers/sessionController.js';
import { protectRoutes } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', protectRoutes, getSessions);
router.get('/recent', protectRoutes, getRecentSessions);
router.get('/:id', protectRoutes, getSessionById);
router.get('/:id/join', protectRoutes, joinSession);
router.get('/:id/end', protectRoutes, endSession);
router.get('/active', protectRoutes, getActiveSessions);
router.post('/', protectRoutes, createSession);

export default router;