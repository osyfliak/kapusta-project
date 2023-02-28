import { createSlice } from '@reduxjs/toolkit';
import { setUserBalance } from './operations';

const initialState = {
  balance: 0,
  isLoadinng: false,
  error: null,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(setUserBalance.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(setUserBalance.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoadinng = false;

        payload && (state.balance = payload.newBalance);
      })
      .addCase(setUserBalance.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      });
  },
});

export default balanceSlice.reducer;
