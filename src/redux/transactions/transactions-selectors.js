export const selectCategoryIncome = state => state.transaction.categoryIncome;
export const selectCategoryExpenses = state => state.transaction.categoryExpenses;
export const selectTransactions = state => state.transaction.transactions;
export const selectIncomeSummary = state =>
  state.transaction.incomes.monthStats;

export const selectItems = state => state.transaction.items;
export const selectExpenseSummary = state =>
  state.transaction.expenses.monthStats;

export const selectIncomes = state => state.transaction.incomes.incomes;

export const selectExpenses = state => state.transaction.expenses.expenses;

// Vasyliev
export const selectType = (state) => state.transaction.type;
export const selectTransactionsPerPeriod = (state) => state.transaction.periodItems;
export const selectCategory = (state) => state.transaction.selectCategory;
// Vasyliev


export const selectUser = state => state.auth.user.email;


