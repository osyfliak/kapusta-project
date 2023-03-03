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

  const monthlySummaryEntries = mergeObjectsIntoEntries(
    allIncomes,
    allExpenses
  );

  console.log('allIncomes', allIncomes);
  console.log('allExpenses', allExpenses);
  console.log('monthlySummaryEntries', monthlySummaryEntries);

  const translate = monthlySummaryEntries => ({
    Январь: ['JANUARY', monthlySummaryEntries[0][1]],
    Февраль: ['FEBRUARY', monthlySummaryEntries[1][1]],
    Март: ['MARCH', monthlySummaryEntries[2][1]],
    Апрель: ['APRIL', monthlySummaryEntries[3][1]],
    Май: ['MAY', monthlySummaryEntries[4][1]],
    Июнь: ['JUNE', monthlySummaryEntries[5][1]],
    Июль: ['JULY', monthlySummaryEntries[6][1]],
    Август: ['AUGUST', monthlySummaryEntries[7][1]],
    Сентябрь: ['SEPTEMBER', monthlySummaryEntries[8][1]],
    Октябрь: ['OCTOBER', monthlySummaryEntries[9][1]],
    Ноябрь: ['NOVEMBER', monthlySummaryEntries[10][1]],
    Декабрь: ['DECEMBER', monthlySummaryEntries[11][1]],
  });

  return (
    <StyledSummary>
      <Title>Summary</Title>
      <List>
        {monthlySummaryEntries.length
          ? monthlySummaryEntries.map(
              ([month, value]) =>
                typeof value === 'number' && (
                  <Month key={month}>
                    {translate(monthlySummaryEntries)[month][0]}
                    <span>{formatNumber(value)}</span>
                  </Month>
                )
            )
          : null}
      </List>
    </StyledSummary>
  );
};
