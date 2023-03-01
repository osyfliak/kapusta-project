import BalanceHome from 'components/Balance/BalanceHome';
import { Header } from 'components/Header/Header';
import { Summary } from 'components/Summary/Summary';
import React from 'react';

export const Home = () => {
  return (
    <div>
      Home
      <BalanceHome />
      <Summary />
      <Header/>
    </div>
  );
};
