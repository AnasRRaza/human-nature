import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { COMMON_ERROR } from '@/constants/common';

interface AuthState {
  user: {
    access_token: string;
    userId: string;
    oneSignalId?: string | null;
    subscriptionId?: string | null;
  } | null;
  userDetails: {} | null;
  otherUserDetails: {} | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  userDetails: null,
  otherUserDetails: null,
  status: 'idle',
  error: null,
};

export const fetchUserDetails = createAsyncThunk<
  {} | null,
  { data: { user_id: string; fetch: string }; otherUserProfile?: boolean }
>('auth/fetchUserDetails', ({ data }) => {
  return data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    clearUser: state => {
      state.user = null;
      state.userDetails = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserDetails.pending, state => {
      state.status = 'loading';
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      const { payload } = action;
      if (!action.meta.arg.otherUserProfile) state.userDetails = payload;
      if (action.meta.arg.otherUserProfile) state.otherUserDetails = payload;
      state.status = 'succeeded';
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? COMMON_ERROR;
    });
  },
});

export const { setUser, clearUser } = authSlice.actions;
