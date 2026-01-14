import { StreamChat } from 'stream-chat';
import { ENV } from './env.js';

if (!ENV.STREAM_API_KEY || !ENV.STREAM_API_SECRET) {
  throw new Error('Stream API key and secret must be provided in environment variables.');
}

export const streamClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET);

export const upsertStreamUser = async (user) => {
  try {
    // Save user to Stream database
    await streamClient.upsertUser(user);
  } catch (error) {
    console.error('Error upserting Stream user:', error);
    throw error;
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    // Delete user from Stream database
    await streamClient.deleteUser(userId);
  } catch (error) {
    console.error('Error deleting Stream user:', error);
    throw error;
  }
}

export const generateStreamToken = (userId) => {
  try {
    // Generate a Stream token for the user
    return streamClient.createToken(userId);
  } catch (error) {
    console.error('Error generating Stream token:', error);
    throw error;
  }
}