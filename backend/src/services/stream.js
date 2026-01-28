import { StreamChat } from 'stream-chat';
import { StreamClient } from '@stream-io/node-sdk';
import { ENV } from '../lib/env.js';

if (!ENV.STREAM_API_KEY || !ENV.STREAM_API_SECRET) {
  throw new Error('Stream API key and secret must be provided in environment variables.');
}

export const chatClient = StreamChat.getInstance(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRET
); // chat client for real-time messaging
export const streamClient = new StreamClient(
  ENV.STREAM_API_KEY,
  ENV.STREAM_API_SECRET
); // stream client for video and audio calls

export const upsertStreamUser = async (user) => {
  try {
    await chatClient.upsertUser(user); // Save user to Stream database
  } catch (error) {
    console.error('Error upserting Stream user:', error);
    throw error;
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId); // Delete user from Stream database
  } catch (error) {
    console.error('Error deleting Stream user:', error);
    throw error;
  }
}

export const generateStreamToken = (userId) => {
  try {
    return chatClient.createToken(userId); // Generate a Stream token for the user
  } catch (error) {
    console.error('Error generating Stream token:', error);
    throw error;
  }
}