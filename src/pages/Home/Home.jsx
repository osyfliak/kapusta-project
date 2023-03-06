import BalanceHome from 'components/Balance/BalanceHome';

import Container from 'components/Container/Container';
import { Outlet } from 'react-router-dom';
import { TabLink, TabLinkMob, BoxButton } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Container>
        <BalanceHome />
        <TabLink to="/home/expenses">expenses</TabLink>
        <TabLink to="/home/income">income</TabLink>
        <Outlet />
        <BoxButton>
   
   <TabLinkMob to="/home/expenses">expenses</TabLinkMob>
   <TabLinkMob to="/home/income">income</TabLinkMob>
 </BoxButton>
      
      </Container>
   
    </>
  );
};
