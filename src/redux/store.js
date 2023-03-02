import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/authSlice';
import balanceReducer from './balance/sliceBalance';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { transactionsPeriodReducer } from './chart/transactions-slice';
import { transactionReducer } from './transactions/transactions-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken', 'sid'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
    transactions: transactionsPeriodReducer,
    balance: balanceReducer,
    transaction: transactionReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'your/action/type',
        ],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});

export const persistor = persistStore(store);

