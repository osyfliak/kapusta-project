import BalanceHome from 'components/Balance/BalanceHome';
import { Chart } from 'components/Chart/Chart';
import OperationsForm from 'components/Form/FormIncome';
import ExpensesPage from 'pages/Expences/Expences';

// import { Summary } from 'components/Summary/Summary';
import React from 'react';


export const Home = () => {
  return (
    <div>
      
      <BalanceHome />
        <OperationsForm/>
      {/* <Summary /> */}
      <ExpensesPage />
      <Chart />
    
    </div>
  );
};  