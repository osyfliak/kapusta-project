export const selectCategoryIncome = state => state.transaction.categoryIncome;
export const selectCategoryExpenses = state =>
  state.transaction.categoryExpenses;
export const selectTransactions = state => state.transaction.transactions;
export const selectIncomeSummary = state => state.transaction.monthsStatsIncome;

export const selectItems = state => state.transaction.items;
export const selectExpenseSummary = state =>
  state.transaction.monthsStatsExpense;

export const selectIncomes = state => state.transaction.incomes;

export const selectExpenses = state => state.transaction.expenses;

export const selectUser = state => state.auth.user.email;
