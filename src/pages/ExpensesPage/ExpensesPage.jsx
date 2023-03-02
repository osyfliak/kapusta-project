import Table from 'components/Table/Table';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Summary } from '../../components/Summary/Summary';

// import {Form} from '../../components/Form/Form'

import {
  selectBalance,
  // selectExpenseTransactions,
  selectIsLoggedIn,
} from '../../redux/selector';
import { getExpense } from '../../redux/transactions/operation';
import { Block } from './ExpensesPage.styled';


export default function ExpensesPage() {
  const dispatch = useDispatch();
  // const allExpenses = useSelector(selectExpenseTransactions);
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);
  const color = 'red';
 
  // useEffect(() => {
  // //   if (user) {
  // //     dispatch(getExpense());
  // //   }
  // // }, [dispatch, user, balance]);

  return (
    <>

      {/* {<Form />} */}
{/* <Block>  */}
  <Table/>
        {/* {allExpenses}
        {color}
      </Table> */}
      <Summary />
      {/* </Block> */}
     

    </>
  );
}
