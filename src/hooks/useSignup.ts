import { useMutation } from '@tanstack/react-query';

import axiosInstance from '@/api/axiosInstance';
import { ENDPOINTS } from '@/constants/endpoints';

type TSignupForm = {
  email: string;
  password: string;
};

export const useSignup = () => {
  return useMutation({
    mutationFn: async (data: TSignupForm) => {
      const response = await axiosInstance.post(ENDPOINTS.SIGNUP, data);

      return response.data;
    },
  });
};
