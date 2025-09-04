import { useMutation } from '@tanstack/react-query';

import axiosInstance from '@/api/axiosInstance';
import { ENDPOINTS } from '@/constants/endpoints';

type TLoginForm = {
  email: string;
  password: string;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: TLoginForm) => {
      const response = await axiosInstance.post(ENDPOINTS.LOGIN, data);

      return response.data;
    },
  });
};
