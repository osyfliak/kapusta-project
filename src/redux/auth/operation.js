import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Report } from 'notiflix/build/notiflix-report-aio';

import {
  login as loginUser,
  register as registerUser,
  logout,
  setAuthHeader,
  clearAuthHeader,
  fullUserInfoAPI,
  refresh,
  googleLoginAPI,
} from 'services/kapusta-api';
import { auth } from 'services/firebase.config';

const provider = new GoogleAuthProvider();

export const googleAuth = createAsyncThunk(
  'auth/google',
  async () => {
    try {
      const data = await signInWithPopup(auth, provider);
    
      console.log(data)
      return data;
    } catch {
      console.log('error');
      
    }
  }
);

// Login Thunk
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await loginUser(credentials);
      setAuthHeader(data.accessToken);
      return data;
    } catch (error) {
      if (error.response.status === 403) {
        Report.failure('Email or Password is wrong.');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      await registerUser(credentials);
      const data = loginUser(credentials);
      setAuthHeader(data.accessToken);

      return data;
    } catch (error) {
      if (error.response.status === 403) {
        Report.failure('Email or Password is wrong.');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Logout Thunk
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logout();
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
// Refresh user Thunk
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    const sid = state.auth.sid;

    setAuthHeader(persistedToken);
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('немає токену');
    }
    try {
      const res = await refresh(sid);
      setAuthHeader(res.newAccessToken);
      const data = await fullUserInfoAPI();
      return {
        user: data,
        token: res.newAccessToken,
        refreshToken: res.newRefreshToken,
        sid: res.newSid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
