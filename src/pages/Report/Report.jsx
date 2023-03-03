import React from 'react';
import BalanceReports from 'components/Balance/BalanceReports';

import Container from 'components/Container/Container';
import { Chart } from 'components/Chart/Chart';
import { Categories } from 'components/Categories/Categories';
import { TotalReportsBalance } from 'components/TotalReportsBalance/TotalReportsBalance';


export const Report = () => {  

        return (
    <Container>
      <BalanceReports />
      <TotalReportsBalance />

      <Categories/>
      <Chart />
    </Container>
  );
};
