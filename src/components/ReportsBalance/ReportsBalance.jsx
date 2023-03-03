// import { useSelector } from 'react-redux';
// import { selectExpenses } from 'redux/transactions/transactions-selectors';
// import { selectIncomes } from 'redux/transactions/transactions-selectors';

// import {
//   Wrapper,
//   Text,
//   Sum,
//   SumPositive,
//   ExpensesContainer,
//   IncomeContainer,
//   Line,
// } from './ReportsBalance.styled';

// const ReportsBalance = () => {
//   const listExpenses = useSelector(selectExpenses);
//     const listIncomes = useSelector(selectIncomes);
//     console.log(listExpenses);

//   return (
//     <Wrapper>
//       {listExpenses?.map((item, index) => {
//         return (
//           <ExpensesContainer key={index}>
//             <Text>Expenses:</Text>
//             <Sum>- {item === 0 ? '00' : item}.00 UAH.</Sum>
//           </ExpensesContainer>
//         );
//       })}

//       <Line />

//       {listIncomes?.map((item, index) => {
//         return (
//           <IncomeContainer key={index}>
//             <Text>Income:</Text>
//             <SumPositive>
//               + {item.sum === 0 ? '00' : item.sum}.00 UAH.
//             </SumPositive>
//           </IncomeContainer>
//         );
//       })}
//     </Wrapper>
//   );
// };
// export default ReportsBalance;
