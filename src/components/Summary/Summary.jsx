import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/selector';

import {
  getExpenseTransactionsByThunk,
  getIncomeTransactionsByThunk,
} from 'redux/transactions/operation';
import {
  selectExpenseSummary,
  selectIncomeSummary,
} from 'redux/transactions/transactions-selectors';
import { StyledSummary, Title, List, Month } from './Summary.styled';

// Function to merge Incomes and Expenses objects
function mergeObjectsIntoEntries(obj1, obj2) {
  if (!obj1 || !obj2) return [];

  const merged = {};
  for (let prop in obj1) {
    if (obj2.hasOwnProperty(prop)) {
      if (typeof obj1[prop] === 'number' && typeof obj2[prop] === 'number') {
        merged[prop] = obj1[prop] - obj2[prop];
      } else {
        merged[prop] = obj1[prop];
      }
    } else {
      merged[prop] = obj1[prop];
    }
  }
  for (let prop in obj2) {
    if (!merged.hasOwnProperty(prop)) {
      merged[prop] = obj2[prop];
    }
  }
  return Object.entries(merged);
}

// Function to format number, e.g. 1000 -> 1 000.00
const formatNumber = num => {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// SUMMARY Component
export const Summary = () => {
  const allIncomes = useSelector(selectIncomeSummary);
  const allExpenses = useSelector(selectExpenseSummary);
  const isToken = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isToken) {
      return;
    }
    dispatch(getExpenseTransactionsByThunk());
    dispatch(getIncomeTransactionsByThunk());
  }, [dispatch, isToken]);

  const monthsEntries = mergeObjectsIntoEntries(allIncomes, allExpenses);

  const translate = array => ({
    Январь: ['JANUARY', array[0][1]],
    Февраль: ['FEBRUARY', array[1][1]],
    Март: ['MARCH', array[2][1]],
    Апрель: ['APRIL', array[3][1]],
    Май: ['MAY', array[4][1]],
    Июнь: ['JUNE', array[5][1]],
    Июль: ['JULY', array[6][1]],
    Август: ['AUGUST', array[7][1]],
    Сентябрь: ['SEPTEMBER', array[8][1]],
    Октябрь: ['OCTOBER', array[9][1]],
    Ноябрь: ['NOVEMBER', array[10][1]],
    Декабрь: ['DECEMBER', array[11][1]],
  });

  return (
    <StyledSummary>
      <Title>Summary</Title>
      <List>
        {monthsEntries.length
          ? monthsEntries.map(
              ([month, value]) =>
                typeof value === 'number' && (
                  <Month key={month}>
                    {translate(monthsEntries)[month][0]}
                    <span>{formatNumber(value)}</span>
                  </Month>
                )
            )
          : null}
      </List>
    </StyledSummary>
  );
};
