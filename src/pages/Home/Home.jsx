import BalanceHome from 'components/Balance/BalanceHome';

import Container from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
import { TabLink } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Container>
        <BalanceHome />
        <TabLink to="/home/expenses">expenses</TabLink>
        <TabLink to="/home/income">income</TabLink>

        <Outlet />
      </Container>
    </>
  );
};
