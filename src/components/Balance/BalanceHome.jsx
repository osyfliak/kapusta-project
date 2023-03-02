import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '../../img/symbol-defs.svg';
import Balance from './Balance';
import { getTransactionPeriodDataThunk } from 'redux/transactions/operation';
import {
  Wrapper,
  ReportLink,
  TitleLink,
  TextLitk,
  TransactionLink,
} from './BalanceHome.styled';

const BalanceHome = () => {
  const dispatch = useDispatch();

  const date = new Date();  
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentPeriod = `${year.toString()}-${month.toString().padStart(2,'0')}`;
  console.log(currentPeriod);
  useEffect(() => {  
    dispatch(getTransactionPeriodDataThunk(currentPeriod)); 
  }, [dispatch,currentPeriod]); 
   
  return (
    <>
      <Wrapper>
      <Balance/>
        <ReportLink to="/report">
          <TitleLink>Reports</TitleLink>
          <svg alt="logo" width={14} height={14}>
            <use href={`${Icon}#icon-Vector`}></use>
          </svg>
        </ReportLink>
        <TransactionLink to="/reports">
          <svg alt="logo" width={14} height={14}>
            <use href={`${Icon}#icon-Vector-Back`}></use>
          </svg>
          <TextLitk>to transaction</TextLitk>
        </TransactionLink>
      </Wrapper>
    </>
  );
};

export default BalanceHome;
