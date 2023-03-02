import BalanceHome from 'components/Balance/BalanceHome';
import { Chart } from 'components/Chart/Chart';
import FormExpenses from 'components/Form/FormExpenses';
import FormIncome from 'components/Form/FormIncome';
// import ExpensesPage from 'pages/Expences/Expences';

// import { Summary } from 'components/Summary/Summary';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export const Home = () => {
  return (
    <div>
      
      <BalanceHome />
      <FormExpenses/>
      {/* <Summary /> */}
      {/* <ExpensesPage /> */}
      <Chart />
        <FormIncome />
    
      <Link to="/home/expenses">expenses</Link>
      <Link to="/home/income">income</Link>
      <Outlet />
      <Chart />
    </div>
  );
};
