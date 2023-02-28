import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateBalance } from 'services/kapusta-api';

export const setUserBalance = createAsyncThunk(
  'auth/balance',
  async ({ balance }, { rejectWithValue }) => {
    try {
      return await updateBalance({ newBalance: balance });
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
