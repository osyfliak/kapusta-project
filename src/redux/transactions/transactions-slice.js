import { createSlice } from '@reduxjs/toolkit';
import {
  addExpenseTransactionThunk,
  addIncomeTransactionThunk,
  deleteTransactionThunk,
  getExpenseCategoriesThunk,
  getExpenseTransactionsByThunk,
  getIncomeCategoriesThunk,
  getIncomeTransactionsByThunk,
  getTransactionPeriodDataThunk,
} from './operation';

const initialState = {
  transactions: [],
  categoryIncome: [],
  categoryExpenses: [],
  isLoading: false,
  error: null,
  periodItems: [],
  selectCategory: null,
  type: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.error = payload;
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setCategoryAction: (state, { payload }) => {
      state.selectCategory = payload;
    },
    setTypeAction: (state, { payload }) => {
      state.type = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addExpenseTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addExpenseTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = [...state.transactions, payload];
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
          state.transactions = payload;
        }
      )
      .addCase(getExpenseTransactionsByThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const indexElem = state.transactions.findIndex(
          item => item.id === payload.id
        );
        state.transactions.splice(indexElem, 1);
      })
      .addCase(deleteTransactionThunk.rejected, (state, { payload }) => {
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
        state.transactions = [...state.transactions, payload];
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
        state.category = payload;
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
      })
      .addCase(getTransactionPeriodDataThunk.pending, handlePending) 
      .addCase(getTransactionPeriodDataThunk.rejected, handleRejected)
      .addCase(getTransactionPeriodDataThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.periodItems = payload;
});
  },
});
export const transactionReducer = transactionSlice.reducer;
export const {setCategoryAction, setTypeAction} = transactionSlice.actions;
