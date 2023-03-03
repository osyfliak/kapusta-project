import useMediaQuery from '@mui/material/useMediaQuery';
import FormIncome from 'components/Form/FormIncome';
import { Summary } from 'components/Summary/Summary';
import TableIncome from '../../components/Table/TableIncome';

// import DenseTable from "components/TableBody/TableBody";
import { Block } from 'pages/Income/Income.styled';
// // import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectBalance, selectIsLoggedIn } from "redux/selector";
// import { getExpense } from "redux/transactions/operation";

export default function ExpensesPage() {
  const isScreenTablet = useMediaQuery(
    '(min-width: 768px) and (max-width: 1280px)'
  );
  const isScreenDesktop = useMediaQuery('(min-width: 1281px)');
  // const dispatch = useDispatch();
  // // const allExpenses = useSelector(selectExpenseTransactions);
  // const user = useSelector(selectIsLoggedIn);
  // const balance = useSelector(selectBalance);
  // const color = 'red';

  // useEffect(() => {
  //   if (user) {
  //     dispatch(getExpense());
  //   }
  // }, [dispatch, user, balance]);

  return (
    <>
      {/* {<Form />} */}
      <FormIncome />
      <Block>
        <TableIncome />
        {/* {allExpenses}
        {color}
      </Table> */}
        {isScreenDesktop && <Summary />}
      </Block>
      {isScreenTablet && <Summary />}
    </>
  );
}
