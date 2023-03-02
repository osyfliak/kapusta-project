import { Summary } from "components/Summary/Summary";
import Table from "components/Table/Table";
import DenseTable from "components/Table/Table";
import { Block } from "pages/Income/Income.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance, selectIsLoggedIn } from "redux/selector";
import { getExpense } from "redux/transactions/operation";

export default function ExpensesPage() {
    const dispatch = useDispatch();
    // const allExpenses = useSelector(selectExpenseTransactions);
    const user = useSelector(selectIsLoggedIn);
    const balance = useSelector(selectBalance);
    const color = 'red';
  
    useEffect(() => {
      if (user) {
        dispatch(getExpense());
      }
    }, [dispatch, user, balance]);
  
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
  