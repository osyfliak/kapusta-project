import { createSlice } from "@reduxjs/toolkit";
import { getTransactionPeriodDataThunk } from "./transactions-thunk";

const handlePending = (state) => {
  state.transactions.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.transactions.error = payload;
};

const mockData = {
  "incomes": {
    "total": 12000,
    "incomesData": {
      "З/П": {
        "total": 12000,
        "Аванс": 5000,
        "Основная": 7000
      }
    }
  },
  "expenses": {
    "total": 5200,
    "incomesData": {
      "Транспорт": {
        "total": 4000,
        "СТО": 3500,
        "Мойка": 500
      },
      "Всё для дома": {
        "total": 1200,
        "Вазон": 150,
        "Шкаф-купе": 1050
      }
    }
  }
}

const initialState = {
  items: mockData,
  isLoading: false,
  error: null,
  category: null,
  type: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setCategoryAction: (state, { payload }) => {
      state.category = payload;
    },
    setTypeAction: (state, { payload }) => {
      state.type = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactionPeriodDataThunk.pending, handlePending) 
      .addCase(getTransactionPeriodDataThunk.rejected, handleRejected)
      .addCase(getTransactionPeriodDataThunk.fulfilled, (state, { payload }) => {
        state.transactions.isLoading = false;
        state.transactions.items = payload;
      });
  },
});

export const transactionsPeriodReducer = transactionsSlice.reducer;
export const {setCategoryAction, setTypeAction} = transactionsSlice.actions;
