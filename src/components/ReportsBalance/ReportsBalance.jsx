// import { useSelector } from 'react-redux';
// import { selectAllSummaryReports } from 'redux/reports/selectors';

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
//   // const summaryReports = useSelector(selectAllSummaryReports);
//   console.log(summaryReports);
//   return (
//     <Wrapper>
//       {summaryReports?.map((item, index) => {
//         if (item.operation === 'expenses') {
//           return (
//             <ExpensesContainer key={index}>
//               <Text>Expenses:</Text>
//               <Sum>
//                 - {item.sum === 0 ? '00' : item.sum}.00 UAH.
//               </Sum>
//             </ExpensesContainer>
//           );
//         }
//         return null;
//       })}

//       <Line/>

//       {summaryReports?.map((item, index) => {
//         if (item.operation === 'income') {
//           return (
//             <IncomeContainer key={index}>
//               <Text>Income:</Text>
//               <SumPositive>
//                 + {item.sum === 0 ? '00' : item.sum}.00 UAH.
//               </SumPositive>
//             </IncomeContainer>
//           );
//         }
//         return null;
//       })}
//     </Wrapper>
//   );
// };
// export default ReportsBalance;