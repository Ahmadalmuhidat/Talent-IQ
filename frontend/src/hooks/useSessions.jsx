import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  getSessions,
  createSession,
  getRecentSessions,
  joinSession,
  endSession,
  getActiveSessions,
  getSessionById
} from '../api/sessions';

export const useCreateSession = () => {
  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: createSession,
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to create room"),
  });

  return result;
};

export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: getActiveSessions,
  });

  return result;
};

export const useRecentSessions = () => {
  const result = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: getRecentSessions,
  });

  return result;
};

export const useSessions = () => {
  const result = useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
  });

  return result;
}

export const useSessionById = (id) => {
  const result = useQuery({
    queryKey: ["session", id],
    queryFn: () => getSessionById(id),
    enabled: !!id,
    refetchInterval: 5000, // refetch every 5 seconds to detect session status changes
  });

  return result;
};

export const useJoinSession = () => {
  const result = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: joinSession,
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to join session"),
  });

  return result;
};

export const useEndSession = () => {
  const result = useMutation({
    mutationKey: ["endSession"],
    mutationFn: endSession,
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to end session"),
  });

  return result;
};