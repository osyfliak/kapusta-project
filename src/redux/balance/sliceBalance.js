import { createSlice } from '@reduxjs/toolkit';
import { logIn, refreshUser } from 'redux/auth/operation';
import { setUserBalance } from './operations';
const initialState = {
  balance: 0,
  currentPeriod: { month: '', year: '' },
  isLoadinng: false,
  error: null,
};
const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setCurrentPeriod(state, action) {
      state.currentPeriod = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.balance = payload.userData.balance;
      })
      .addCase(setUserBalance.pending, state => {
        state.isLoadinng = true;
        state.error = null;
      })
      .addCase(setUserBalance.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isLoadinng = false;
        state.balance = payload.newBalance;
      })
      .addCase(setUserBalance.rejected, (state, { payload }) => {
        state.isLoadinng = false;
        state.error = payload;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.balance = payload.user.balance ?? 0;
      });
  },
});
export default balanceSlice.reducer;
export const { setCurrentPeriod } = balanceSlice.actions;