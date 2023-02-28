import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balance/sliceBalance';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
