import BalanceHome from 'components/Balance/BalanceHome';
import { Chart } from 'components/Chart/Chart';


// import { Summary } from 'components/Summary/Summary';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      Home
      <BalanceHome />
      <Link to="/home/expenses">expenses</Link>
      <Link to="/home/income">income</Link>
      <Outlet />
      <Chart />
    </div>
  );
};
