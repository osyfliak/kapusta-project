// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { instance } from 'redux/auth/authOperations';
import { getTransactionPeriodData } from 'services/kapusta-api';

// const instance = axios.create({
//   baseURL: 'https://kapusta-backend.goit.global/transaction',
// });

// const setToken = token => {
//   if (token) {
//     return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
//   }
//   instance.defaults.headers.common.authorization = '';
// };

export const getStatistics = createAsyncThunk(
  'stats/getStatistics',
  async ({ period }, thunkAPI) => {
    try {
      // setToken(token);
      const { data } = await getTransactionPeriodData();
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue('Not founded!');
    }
  }
);