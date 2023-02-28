// import { privateApi, publicApi } from 'http/http';

// export const token = {
//   set: token => {
//     privateApi.defaults.headers.Authorization = `Bearer ${token}`;
//   },
//   unSet: () => {
//     privateApi.defaults.headers.Authorization = '';
//   },
// };

// export const login = async () => {
//   const { data } = await publicApi.post('/auth/login');
//   return data;
// };

// export const register = async () => {
//   const { data } = await publicApi.post('/auth/register');
//   return data;
// };

// export const logout = async () => {
//   const { data } = await privateApi.post('/auth/logout');
//   return data;
// };

// export const refresh = async () => {
//   const { data } = await privateApi.post('/auth/refresh');
//   return data;
// };

// // request:
// //     "description": "Income description",
// //     "amount": 100,
// //      "date": "2020-12-31"
// //

// export const addTransactionIncome = async request => {
//   const { data } = await privateApi.post('/transaction/income', request);
//   return data;
// };

// export const addTransactionExpense = async request => {
//   const { data } = await privateApi.post('/transaction/expense', request);
//   return data;
// };

// export const getTransactionIncome = async () => {
//   const { data } = await privateApi.get('/transaction/income');
//   return data;
// };

// export const getTransactionExpense = async () => {
//   const { data } = await privateApi.get('/transaction/expense');
//   return data;
// };

// export const deleteTransaction = async id => {
//   const { data } = await privateApi.get('/transaction/expense', id);
//   return data;
// };

// export const getTransactionIncomeCategories = async () => {
//     const { data } = await privateApi.get('/transaction/income-categories');
//     return data;
//   };

//   export const getTransactionExpenseCategories = async () => {
//     const { data } = await privateApi.get('/transaction/expense-categories');
//     return data;
//   };

//   export const getTransactionPeriodData = async (date) => {
//     const { data } = await privateApi.get('/transaction/period-data', date);
//     return data;
//   };

//   export const updateBalance= async (request) => {
//     const { data } = await privateApi.get('/user/balance',request );
//     return data;
//   };

//   export const getUser = async (date) => {
//     const { data } = await privateApi.get('/user', );
//     return data;
//   };

