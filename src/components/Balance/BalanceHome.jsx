import Icon from '../../img/symbol-defs.svg';
import Balance from './Balance';
import {
  Wrapper,
  ReportLink,
  TitleLink,
  TextLitk,
  TransactionLink,
} from './BalanceHome.styled';



const BalanceHome = () => {
  return (
    <>
      <Wrapper>
      <Balance/>
        <ReportLink to="/reports">
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
