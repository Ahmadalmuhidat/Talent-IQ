import sessionModel from '../models/sessionModel.js';
import { streamClient, chatClient } from '../lib/stream.js';

export async function getSessions(req, res) {
  try {
    const sessions = await sessionModel.find();
    res.status(200).json({ sessions });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function joinSession(req, res) {
  try {
    // Find the session by ID
    const session = await sessionModel.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    // Check if user is already a participant
    if (session.participants.includes(req.user._id)) {
      return res.status(400).json({ message: 'User already joined the session' });
    }

    // Check if session is full (max 10 participants)
    if (session.participants.length >= 10) {
      return res.status(400).json({ message: 'Session is full' });
    }

    // Check if session is completed
    if (session.status === 'completed') {
      return res.status(400).json({ message: 'Cannot join a completed session' });
    }

    // Add user to the session participants
    session.participants.push(req.user._id);
    await session.save();

    // Add user to the Stream chat channel
    const channel = chatClient.channel('messaging', session.callId);
    await channel.addMembers([req.user.clerkId]);

    res.status(200).json({
      message: 'Joined session successfully',
      userId: req.user.clerkId,
      userName: req.user.name
    }); 
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function endSession(req, res) {
  try {
    // Find the session by ID
    const session = sessionModel.findById(req.params.id)
      .populate('host', 'name profilePicture clerkId email')
      .populate('participants', 'name profilePicture clerkId email');
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    // Only the host can end the session
    if (session.host._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Only the host can end the session' });
    }

    // Check if session is already completed
    if (session.status === 'completed') {
      return res.status(400).json({ message: 'Session is already completed' });
    }

    // Update session status to 'completed'
    session.status = 'completed';
    await session.save();

    // Delete the Stream video call
    const call = streamClient.video.call("default", session.callId);
    await call.delete({hard: true});

    // Delete the Stream chat channel
    const chat = chatClient.channel('messaging', session.callId);
    await chat.delete({});

    res.status(200).json({ message: 'Session ended successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    // Fetch recent sessions from the database
    const sessions = await sessionModel.find({
      status: 'completed',
      $or: [
        {
          host: userId
        },
        {
          participants: userId
        }]
    })
      .populate('host', 'name profilePicture clerkId email')
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getSessionById(req, res) {
  try {
    // Find the session by ID
    const session = await sessionModel.findById(req.params.id)
      .populate('host', 'name profilePicture clerkId email')
      .populate('participants', 'name profilePicture clerkId email');
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    res.status(200).json({ session });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function getActiveSessions(req, res) {
  try {
    // Fetch active sessions from the database in descending order of creation date
    const sessions = await sessionModel.find({ status: 'active' })
      .populate('host', 'name profilePicture clerkId email')
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function createSession(req, res) {
  try {
    const { problem, defficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    if (!problem || !defficulty) {
      return res.status(400).json({ message: 'Problem and difficulty are required' });
    }

    // Create a new session in the database
    const callId = `session_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const session = sessionModel.create({
      host: userId,
      token: clerkId,
      problem: problem,
      diffulty: defficulty,
      callId: callId
    });

    // Create a video call in Stream
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: {
          problem: problem,
          defficulty: defficulty,
          sessionId: session._id.toString()
        }
      }
    });

    // Create a chat channel in Stream
    await chatClient.channel('messaging', callId, {
      name: `Session with ${req.user.name}`,
      members: [clerkId],
      created_by_id: clerkId
    }).create();

    res.status(201).json({
      message: 'Session created',
      userId: req.user.clerkId,
      userName: req.user.name
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
