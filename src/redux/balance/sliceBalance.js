import { createSlice } from '@reduxjs/toolkit';
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
export const { setCurrentPeriod } = balanceSlice.actions;
