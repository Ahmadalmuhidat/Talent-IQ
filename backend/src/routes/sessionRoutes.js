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
router.post('/', protectRoutes, createSession);

router.get('/recent', protectRoutes, getRecentSessions);
router.get('/active', protectRoutes, getActiveSessions);

router.post('/:id/join', protectRoutes, joinSession);
router.post('/:id/end', protectRoutes, endSession);
router.get('/:id', protectRoutes, getSessionById);

export default router;