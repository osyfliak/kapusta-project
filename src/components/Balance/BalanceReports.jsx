import Icon from '../../img/symbol-defs.svg';
import Balance from './Balance';
import {
  BackLink,
  TextLitkReports,
  WrapperBalanceReports,
} from './BalanceReports.styled';
import ReportsCurrentPeriod from './ReportsCurrentPeriod';
import useMediaQuery from '@mui/material/useMediaQuery';

const BalanceReports = () => {
   const isScreenMorePhone = useMediaQuery('(min-width: 768px)');
  return (
    (isScreenMorePhone ?
     (<WrapperBalanceReports>
        <BackLink to="/">
          <svg alt="logo" width={24} height={24}>
            <use href={`${Icon}#icon-Vector-Back`}></use>
          </svg>
          <TextLitkReports>Main page</TextLitkReports>
        </BackLink>
        <Balance />
        <ReportsCurrentPeriod/>
      </WrapperBalanceReports>) :<WrapperBalanceReports>
        <BackLink to="/">
          <svg alt="logo" width={24} height={24}>
            <use href={`${Icon}#icon-Vector-Back`}></use>
          </svg>
          <TextLitkReports>Main page</TextLitkReports>
        </BackLink>
        <ReportsCurrentPeriod/>
        <Balance />
      </WrapperBalanceReports> )
  );
};

export default BalanceReports;
