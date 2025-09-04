import axios from 'axios';

import { CONFIG } from '@/constants/config';
import { useAuthStore } from '@/store/auth';

const axiosInstance = axios.create({
  baseURL: CONFIG.API_URL,
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
