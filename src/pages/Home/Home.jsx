import BalanceHome from 'components/Balance/BalanceHome';

import { Summary } from 'components/Summary/Summary';
import React from 'react';
import Categories from 'components/Categories/Categories';
import Container from 'components/Container/Container';

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Test } from './Home.styled';

import Categories from 'components/Categories/Categories';

ex
import { Outlet } from 'react-router-dom';
import { Test } from './Home.styled';

export const Home = () => {
	return (
		<>
			<Container>
				<BalanceHome />
				<Test to="/home/expenses">expenses</Test>
				<Test to="/home/income">income</Test>

				<Outlet />
			</Container>
		</>
	);
};

