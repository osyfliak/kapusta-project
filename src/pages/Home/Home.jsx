
import { Chart } from 'components/Chart/Chart';
import BalanceHome from 'components/Balance/BalanceHome';

import { Summary } from 'components/Summary/Summary';
import React from 'react';
import Categories from 'components/Categories/Categories';

export const Home = () => {
	return (
		<div>
			Home
			<BalanceHome />
			<Summary />
			<Categories />
			<Chart />
		</div>
	);
};