import BalanceHome from 'components/Balance/BalanceHome';

import { Chart } from 'components/Chart/Chart';
import FormExpenses from 'components/Form/FormExpenses';
import FormIncome from 'components/Form/FormIncome';
// import ExpensesPage from 'pages/Expences/Expences';


import Container from 'components/Container/Container';



import React from 'react';
import {  Outlet } from 'react-router-dom';
import { Test } from './Home.styled';


export const Home = () => {
  return (

<>
      
      <BalanceHome />
      <FormExpenses/>
      {/* <Summary /> */}
      {/* <ExpensesPage /> */}
      <Chart />
 
        <FormIncome />
    
 
    <Container>
      <BalanceHome />
      <Test to="/home/expenses">expenses</Test>
      <Test to="/home/income">income</Test>

      <Outlet />
      
      </Container>
      </>
  );
};
