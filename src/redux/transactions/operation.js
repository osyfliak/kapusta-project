import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionIncome,
  getTransactionIncome,
  addTransactionExpense,
  getTransactionExpense,
  deleteTransaction,
  //   getTransactionIncomeCategories,
  //   getTransactionExpenseCategories,
  //   getTransactionPeriodData,
  updateBalance,
  fullUserInfoAPI,
} from '../../services/kapusta-api';


//addIncome
export const addIncome = createAsyncThunk(
  'transactions/addIncome',
  async (value, thunkApi) => {
    try {
      const response = await addTransactionIncome(value);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// getIncome
export const getIncome = createAsyncThunk(
  'transactions/getIncome',
  async (_, thunkAPI) => {
    try {
      const data = await getTransactionIncome();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// addExpense
export const addExpense = createAsyncThunk(
    'transactions/addExpense',
    async (value, thunkAPI) => {
      try {
        const data = await addTransactionExpense(value);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// getExpense
export const getExpense = createAsyncThunk(
    'transactions/getExpense',
    async (_, thunkAPI) => {
      try {
        const data = await getTransactionExpense();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// delete
  export const Delete = createAsyncThunk(
    'transactions/deleteTransaction',
    async (id, thunkAPI) => {
      try {
        const { newBalance } = await deleteTransaction(id);
        return { newBalance, id };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// Refresh
export const getAllTransactions = createAsyncThunk(
    'transactions/getAllTransactions',
    async (_, thunkAPI) => {
      try {
        const data = await fullUserInfoAPI();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
 
// Update balance Thunk
export const updateBal = createAsyncThunk(
    'transactions/updateBalance',
    async (value, thunkAPI) => {
      try {
        const data = await updateBalance(value);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );