import { Chart } from 'components/Chart/Chart';
import BalanceHome from 'components/Balance/BalanceHome';

import { Summary } from 'components/Summary/Summary';
import React from 'react';

export const Home = () => {
  return (
    <div>
      Home
      <BalanceHome />
      <Summary />
      <Chart/>
    </div>
  );
};
