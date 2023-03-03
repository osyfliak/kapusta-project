import { combineReducers } from "redux";
import { transactionsPeriodReducer } from "./chart/transactions-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { usersReducer } from "./users-slice";

const persistUsersConfig = {
  key: "users",
  storage,
};

const persistedUsersReducer = persistReducer(persistUsersConfig, usersReducer);

export const rootReducer = combineReducers({
    transactions: transactionsPeriodReducer,
    users: persistedUsersReducer,
  });