import { generateStreamToken } from '../lib/stream.js';

export function getChatToken(req, res) {
  try {
    res.json({
      token: generateStreamToken(req.user.clerkId),
      userId: req.user.clerkId,
      userName: req.user.name
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}