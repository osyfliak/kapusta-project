import BalanceHome from 'components/Balance/BalanceHome';
import { Chart } from 'components/Chart/Chart';
import FormExpenses from 'components/Form/FormExpenses';
import FormIncome from 'components/Form/FormIncome';
import ExpensesPage from 'pages/Expences/Expences';

// import { Summary } from 'components/Summary/Summary';
import React from 'react';


export const Home = () => {
  return (
    <div>
      
      <BalanceHome />
      <FormExpenses/>
      {/* <Summary /> */}
      <ExpensesPage />
      <Chart />
        <FormIncome />
    
    </div>
  );
};  