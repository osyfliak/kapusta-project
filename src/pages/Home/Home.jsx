import BalanceHome from 'components/Balance/BalanceHome';
import { Chart } from 'components/Chart/Chart';
import ExpensesPage from 'pages/Expences/Expences';

// import { Summary } from 'components/Summary/Summary';
import React from 'react';

export const Home = () => {
  return (
    <div>
      Home
      <BalanceHome />
      {/* <Summary /> */}
      <ExpensesPage />
      <Chart/>
    </div>
  );
};  