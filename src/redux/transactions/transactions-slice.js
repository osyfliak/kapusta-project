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

const mockData = {
  incomes: {
    total: 12000,
    incomesData: {
      'З/П': {
        total: 12000,
        Аванс: 5000,
        Основная: 7000,
      },
    },
  },
  expenses: {
    total: 5200,
    expensesData: {
      Транспорт: {
        total: 4000,
        СТО: 3500,
        Мойка: 500,
      },
      'Всё для дома': {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
    },
  },
};

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

  periodItems: mockData,
  selectCategory: null,
  type: 'expenses',
};

const handlePending = state => {
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
      state.selectCategory = null;
    },
  },
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
      .addCase(deleteTransactionThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.expenses = state.expenses.filter(el => el._id !== payload.id);
        state.incomes = state.incomes.filter(el => el._id !== payload.id);
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
      })
      .addCase(getTransactionPeriodDataThunk.pending, handlePending)
      .addCase(getTransactionPeriodDataThunk.rejected, handleRejected)
      .addCase(
        getTransactionPeriodDataThunk.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.periodItems = payload;
        }
      );
  },
});
export const transactionReducer = transactionSlice.reducer;
export const { setCategoryAction, setTypeAction } = transactionSlice.actions;
