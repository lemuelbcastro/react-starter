import sessionService from '../services/session';
import requestCanceler from './requestCanceler';

const handler = {
  success: (config) => {
    const session = sessionService.get();

    if (session && session.token) {
      config.headers.authorization = `Bearer ${session.token}`;
    }

    config.cancelToken = requestCanceler.token();

    return config;
  },
  error: (error) => Promise.reject(error)
};

export const { success, error } = handler;
