import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export const Summary = () => {
  const allIncomes = useSelector(selectIncomeSummary);
  const allExpenses = useSelector(selectExpenseSummary);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseTransactionsByThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIncomeTransactionsByThunk());
  }, [dispatch]);

  const monthlySummaryEntries = mergeObjectsIntoEntries(
    allIncomes,
    allExpenses
  );



  // const translatedObj = {
  //   январь: ['JANUARY', monthlySummaryEntries[0][1]],
  //   февраль: ['FEBRUARY', monthlySummaryEntries[1][1]],
  //   март: ['MARCH', monthlySummaryEntries[2][1]],
  //   апрель: ['APRIL', monthlySummaryEntries[3][1]],
  //   май: ['MAY', monthlySummaryEntries[4][1]],
  //   июнь: ['JUNE', monthlySummaryEntries[5][1]],
  //   июль: ['JULY', monthlySummaryEntries[6][1]],
  //   август: ['AUGUST', monthlySummaryEntries[7][1]],
  //   сентябрь: ['SEPTEMBER', monthlySummaryEntries[8][1]],
  //   октябрь: ['OCTOBER', monthlySummaryEntries[9][1]],
  //   ноябрь: ['NOVEMBER', monthlySummaryEntries[10][1]],
  //   декабрь: ['DECEMBER', monthlySummaryEntries[11][1]],
  // };

  // console.log(translatedObj['январь']);

  return (
    <StyledSummary>
      <Title>Summary</Title>
      <List>
        {monthlySummaryEntries?.map(
          ([month, value]) =>
            typeof value === 'number' && (
              <Month key={month}>
                {month} <span>{formatNumber(value)}</span>
              </Month>
            )
        )}
      </List>
    </StyledSummary>
  );
};
