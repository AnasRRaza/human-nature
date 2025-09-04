import { create } from 'zustand';

import { User } from '@/models/user';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  token: null,
  user: null,

  setToken: (token: string) => {
    set({ token });
  },

  setUser: (user: User) => {
    set({ user });
  },

  logout: () => {
    set({ user: null, token: null });
  },
}));
