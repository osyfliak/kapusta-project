import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTransactionPeriodData } from '../../services/kapusta-api.js';

export const getTransactionPeriodDataThunk = createAsyncThunk(
  "transaction/getTransactionsPeriodData",
  async (_, { rejectWithValue }) => {
    try {
      const date = Date('2023-02-01');
      const data = await getTransactionPeriodData(date);
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);


