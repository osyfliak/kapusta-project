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
  'transaction/addExpenseTransaction',
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
  'transaction/getExpenseTransactions',
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
  'transaction/getExpenseCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTransactionExpenseCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTransactionThunk = createAsyncThunk(
  'transaction/deleteTransaction',
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
  'transaction/addIncomeTransaction',
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
  'transaction/getIncomeTransactions',
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
  'transaction/getIncomeCategories',
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

export const getTransactionPeriodDataThunk = createAsyncThunk(
  "transaction/getTransactionsPeriodData",
  async (date, { rejectWithValue }) => {
    try { 
      console.log("before getTransactionsPeriodData");    
      const data = await getTransactionPeriodData(date);
      console.log("getTransactionsPeriodData: ",data);
      return data;
    } catch (error) {
      console.log("rejectWithValue: ",error.message);
      return rejectWithValue(error.message);
    }
  }
);

