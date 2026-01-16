import axios from '../lib/axios';

export const getSessions = async () => {
  const response = await axios.get('/api/sessions');
  return response.data;
}

export const getSessionById = async (id) => {
  const response = await axios.get(`/sessions/${id}`);
  return response.data;
}

export const createSession = async (sessionData) => {
  const response = await axios.post('/sessions', {
    problem : sessionData.problem,
    difficulty : sessionData.difficulty
  });
  return response.data;
}

export const getRecentSessions = async () => {
  const response = await axios.get('/sessions/recent');
  return response.data;
}

export const joinSession = async (id) => {
  const response = await axios.post(`/sessions/${id}/join`);
  return response.data;
}

export const endSession = async (id) => {
  const response = await axios.post(`/sessions/${id}/end`);
  return response.data;
}

export const getActiveSessions = async () => {
  const response = await axios.get('/sessions/active');
  return response.data;
}

export const getStreamToken = async () => {
  const response = await axios.get('/chat/token');
  return response.data;
}