import axios from 'axios';

import { useAuthStore } from '@/store/auth';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const { token } = useAuthStore.getState() ?? {};

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
