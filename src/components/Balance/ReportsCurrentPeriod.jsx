import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import changeMonth from 'helpers/changeMonth';
import { setCurrentPeriod } from '../../redux/balance/sliceBalance';
import Icon from '../../img/symbol-defs.svg';
import {
  Title,
  Button,
  ContainerPeriod,
  Text,
} from './ReportsCurrentPeriod.styled';
import { getTransactionPeriodDataThunk } from 'redux/transactions/operation';
import { setCategoryAction } from 'redux/transactions/transactions-slice';

const ReportsCurrentPeriod = () => {
  const [newDate, setNewDate] = useState(() => new Date());
  const dispatch = useDispatch();

  useEffect(() => {    
    dispatch(
      setCurrentPeriod({
        month: moment(newDate).format('MMMM'),
        monthNum: moment(newDate).format('MM'),
        year: moment(newDate).format('yyyy'),
      })
    );    
    dispatch(getTransactionPeriodDataThunk(`${moment(newDate).format('yyyy')}-${moment(newDate).format('MM').padStart(2,'0')}`)); 
    dispatch(setCategoryAction(null));
  }, [dispatch, newDate]);

      
  const monthChangeLeft = () => {
    const prevDate = moment(newDate).subtract(1, 'months');
    setNewDate(prevDate);
  };
  const monthChangeRight = () => {
    const nextDate = moment(newDate).add(1, 'months');
    setNewDate(nextDate);
  };

  const year = moment(newDate).format('YYYY');
  const month = moment(newDate).format('MMMM');

  return (
    <div>
      <Title>Current period:</Title>
      <ContainerPeriod>
        <Button type="button" onClick={monthChangeLeft}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${Icon}#icon-Vector-left`}></use>
          </svg>
        </Button>
        <Text>{`${changeMonth(month)} ${year}`}</Text>
        <Button type="button" onClick={monthChangeRight}>
          <svg alt="exit" width={16} height={16}>
            <use href={`${Icon}#icon-Vector-right`}></use>
          </svg>
        </Button>
      </ContainerPeriod>
    </div>
  );
};

export default ReportsCurrentPeriod;