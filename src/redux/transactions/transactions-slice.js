import { createSlice } from '@reduxjs/toolkit';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
  delateTransactionThunk,
  getExpenseCategoriesThunk,
  getExpenseTransactionsByThunk,
  getIncomeCategoriesThunk,
  getIncomeTransactionsByThunk,
} from './operation';

const initialState = {
  transactions: [],
  categoryIncome: [],
  categoryExpenses: [],
  expenses: [],
  incomes: [],
  isLoading: false,
  error: null,
  monthsStatsIncome: null,
  monthsStatsExpense: null,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addExpenseTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addExpenseTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.expenses = [payload.transaction, ...state.expenses];
      })
      .addCase(addExpenseTransactionThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getExpenseTransactionsByThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getExpenseTransactionsByThunk.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.expenses = payload.expenses;
          state.monthsStatsExpense = payload.monthsStats;
        }
      )
      .addCase(getExpenseTransactionsByThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(delateTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(delateTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const indexElem = state.transactions.findIndex(
          item => item.id === payload.id
        );
        state.transactions.splice(indexElem, 1);
      })
      .addCase(delateTransactionThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getExpenseCategoriesThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getExpenseCategoriesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categoryExpenses = payload;
      })
      .addCase(getExpenseCategoriesThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addIncomeTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addIncomeTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.incomes = [payload.transaction, ...state.incomes];
        console.log(payload);
      })
      .addCase(addIncomeTransactionThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getIncomeTransactionsByThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getIncomeTransactionsByThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.incomes = payload.incomes;
        state.monthsStatsIncome = payload.monthsStats;
      })
      .addCase(getIncomeTransactionsByThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getIncomeCategoriesThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getIncomeCategoriesThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.categoryIncome = payload;
      })
      .addCase(getIncomeCategoriesThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
export const transactionReducer = transactionSlice.reducer;
