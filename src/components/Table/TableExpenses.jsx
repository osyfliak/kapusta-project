import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {  selectTransactions } from 'redux/transactions/transactions-selectors';
import { useSelector } from 'react-redux';


export default function DenseTable() {
    const expensesList = useSelector(selectTransactions);
console.log(expensesList);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesList.map(object => {
            console.log('object.transaction: ',object.transaction);
            return   <TableRow key={object.transaction._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{object.transaction.date.split('-').join('.')}</TableCell>
              <TableCell align="right">{object.transaction.description}</TableCell>
              <TableCell align="right">{object.transaction.category}</TableCell>
              <TableCell align="right">{object.transaction.amount}</TableCell>
              
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}