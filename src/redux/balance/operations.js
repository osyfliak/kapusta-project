import { createAsyncThunk } from '@reduxjs/toolkit';
import {  updateBalance } from 'services/kapusta-api';

export const setUserBalance = createAsyncThunk(
  'balance/setBalance',

  async (request, { rejectWithValue, getState }) => {
    try {
      const resp = await updateBalance(request);
      console.log(resp);
      return resp;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);
// const savedToken = getState().auth.token;
// if (!savedToken) {
//   return rejectWithValue('there is no token');
// }
// setAuthHeader(savedToken);
