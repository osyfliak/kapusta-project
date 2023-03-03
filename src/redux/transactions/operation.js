import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionExpense,
  addTransactionIncome,
  deleteTransaction,
  getTransactionExpense,
  getTransactionExpenseCategories,
  getTransactionIncome,
  getTransactionIncomeCategories,
  getTransactionPeriodData,
} from '../../services/kapusta-api';

export const addExpenseTransactionThunk = createAsyncThunk(
  'expenses/addTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const data = await addTransactionExpense(transactionData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getExpenseTransactionsByThunk = createAsyncThunk(
  'expenses/getTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const data = await getTransactionExpense(transactionData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getExpenseCategoriesThunk = createAsyncThunk(
  'expenses/getExpenseCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTransactionExpenseCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const delateTransactionThunk = createAsyncThunk(
  'expenses/delateTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await deleteTransaction(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*income */
export const addIncomeTransactionThunk = createAsyncThunk(
  'income/addTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const data = await addTransactionIncome(transactionData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getIncomeTransactionsByThunk = createAsyncThunk(
  'income/getTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const data = await getTransactionIncome(transactionData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getIncomeCategoriesThunk = createAsyncThunk(
  'income/getExpenseCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTransactionIncomeCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  'transaction/byDate',
  async (date, { rejectWithValue }) => {
    try {
      const data = await getTransactionPeriodData(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
