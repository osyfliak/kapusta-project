import { privateApi, publicApi } from 'http/http';
import { Report } from 'notiflix/build/notiflix-report-aio';

// axios.defaults.baseURL = 'https://kapusta-backend.goit.global';
// axios.defaults.validateStatus();

export const login = async user => {
  const { data } = await publicApi.post('/auth/login', user);
  return data;
};

export const register = async user => {
  try {
    const { data } = await publicApi.post('/auth/register', user);
    return data;
  } catch (error) {
    if (error.response.status === 409) {
      Report.failure(`User ${user.email} is existing`);
    }
  }
};

export const logout = async () => {
  const { data } = await privateApi.post('/auth/logout');
  return data;
};

export const googleLoginAPI = async () => {
  const response = await publicApi.get('/auth/google', {
    headers: {
      accept: '*/*',
    },
  });
  console.log('response', response);
  return response;
};

export const fullUserInfoAPI = async () => {
  const { data } = await privateApi.get('user');
  return data;
};

export const refresh = async sid => {
  const { data } = await privateApi.post('/auth/refresh', { sid });
  return data;
};

export const setAuthHeader = token => {
  privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  privateApi.defaults.headers.common.Authorization = '';
};

// request:
//     "description": "Income description",
//     "amount": 100,
//      "date": "2020-12-31"
//

export const addTransactionIncome = async request => {
  const { data } = await privateApi.post('/transaction/income', request);
  return data;
};

export const addTransactionExpense = async request => {
  const { data } = await privateApi.post('/transaction/expense', request);
  return data;
};

export const getTransactionIncome = async () => {
  const { data } = await privateApi.get('/transaction/income');
  return data;
};

export const getTransactionExpense = async () => {
  const { data } = await privateApi.get('/transaction/expense');
  return data;
};

export const deleteTransaction = async id => {
  const { data } = await privateApi.get('/transaction/expense', id);
  return data;
};

export const getTransactionIncomeCategories = async () => {
  const { data } = await privateApi.get('/transaction/income-categories');
  return data;
};

export const getTransactionExpenseCategories = async () => {
  const { data } = await privateApi.get('/transaction/expense-categories');
  return data;
};

export const getTransactionPeriodData = async date => {
  const { data } = await privateApi.get('/transaction/period-data', date);
  return data;
};

export const updateBalance = async request => {

  const { data } = await privateApi.patch('/user/balance', request);

  return data;
};

export const getUser = async date => {
  const { data } = await privateApi.get('/user');
  return data;
};

export const token = {
  set: token => {
    privateApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privateApi.defaults.headers.Authorization = "";
  },
};

