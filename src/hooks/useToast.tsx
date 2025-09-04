import React from 'react';
import { useToast } from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '@/constants/colors';

export const useToastNotification = () => {
  const toast = useToast();

  const showToast = (message: string, type: 'success' | 'error') => {
    const icon =
      type === 'success' ? (
        <Icon name="checkmark" size={18} color={COLORS.green} />
      ) : (
        <Icon name="close" size={18} color={COLORS.red} />
      );

    toast.show(message, {
      icon,
    });
  };

  return showToast;
};
