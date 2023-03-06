import React from 'react';
import BalanceReports from 'components/Balance/BalanceReports';

import ContainerBoxReports from 'components/Container/ContainerBoxReports';
import { Chart } from 'components/Chart/Chart';
import { Categories } from 'components/Categories/Categories';
import { TotalReportsBalance } from 'components/TotalReportsBalance/TotalReportsBalance';
import { CategoryWrap } from './Report.styled';

export const Report = () => {
  return (
    <ContainerBoxReports>
      <BalanceReports />
      <TotalReportsBalance />
      <CategoryWrap>
        <Categories />
      </CategoryWrap>
      <Chart />
    </ContainerBoxReports>
  );
};
