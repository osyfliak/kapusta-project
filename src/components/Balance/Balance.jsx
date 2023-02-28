import { StyledBalance, Title, List, Month } from './Balance.styled';

const testBalanceValues = [
  {
    month: 'january',
    value: 10000,
  },
  {
    month: 'february',
    value: 15000,
  },
  {
    month: 'march',
    value: 7000,
  },
  {
    month: 'april',
    value: 15650,
  },
  {
    month: 'may',
    value: 25000,
  },
  {
    month: 'june',
    value: 3700,
  },
  {
    month: 'july',
    value: 20000,
  },
  {
    month: 'august',
    value: 15300,
  },
  {
    month: 'september',
    value: 42000,
  },
  {
    month: 'october',
    value: 0,
  },
  {
    month: 'november',
    value: 11000,
  },
  {
    month: 'december',
    value: 34800,
  },
];

const formatNumber = num => {
  return num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const Balance = () => {
  return (
    <StyledBalance>
      <Title>Summary</Title>
      <List>
        {testBalanceValues.map(({ month, value }) => (
          <Month key={month}>
            {month} <span>{formatNumber(value)}</span>
          </Month>
        ))}
      </List>
    </StyledBalance>
  );
};
