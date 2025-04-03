// src/lib/axios.ts
import axios from 'axios';

// Create a custom axios instance with default config
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Add a request interceptor to attach the auth token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage (client-side only)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['x-auth-token'] = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;