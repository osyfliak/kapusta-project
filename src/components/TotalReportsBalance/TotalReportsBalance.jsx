import { useSelector } from 'react-redux';
import {  selectTransactionsTotalExpenses, selectTransactionsTotalIncome  } from 'redux/transactions/transactions-selectors';


import {
  Wrapper,
  Text,
  Sum,
  SumPositive,
  ExpensesContainer,
  IncomeContainer,
  Line,
} from './ReportsBalance.styled';


export const TotalReportsBalance = () => {
    const listExpenses = useSelector(selectTransactionsTotalExpenses);
    const listIncomes = useSelector(selectTransactionsTotalIncome)

  return (
    <Wrapper>
      <ExpensesContainer>
        <Text>Expenses:</Text>
        <Sum>- {listExpenses === 0 ? '00' : listExpenses}.00 UAH.</Sum>
      </ExpensesContainer>

      <Line />

      <IncomeContainer>
        <Text>Income:</Text>
        <SumPositive>
          + {listIncomes === 0 ? '00' : listIncomes}.00 UAH.
        </SumPositive>
      </IncomeContainer>
    </Wrapper>
  );
};

