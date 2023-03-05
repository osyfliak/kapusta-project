import { createSlice } from '@reduxjs/toolkit';

import { googleAuth, logIn, logOut, refreshUser, register } from './operation';

const initialState = {
  user: { email: null, id: null },
  token: null,
  refreshToken: '',
  sid: '',
  isLoggedIn: false,
  isLoadingCurrentUser: false,
  isFetchingCurrentUser: false,
};

const handleAuth = (state, action) => {
  const { email, id, balance } = action.payload.userData;
  state.user = { email, id, newBalance: balance };
  state.token = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.sid = action.payload.sid;
  state.isLoggedIn = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAccessToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // login
      .addCase(logIn.fulfilled, handleAuth)
      .addCase(googleAuth.fulfilled, (state, action) => {
        state.user = {email: action.payload.user.email, id: action.payload.user.uid  };
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.token = action.payload.user.accessToken;
        state.refreshToken = action.payload._tokenResponse.refreshToken;
        state.sid = action.payload.user.uid ;
      })
      .addCase(register.fulfilled, handleAuth)
      // logout
      .addCase(logOut.fulfilled, state => {
        return initialState;
      })
      // refresh user
      .addCase(refreshUser.pending, (state, action) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
        state.user = { email: null, id: null, newBalance: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReduser = authSlice.reducer;

export const { addAccessToken } = authSlice.actions;
