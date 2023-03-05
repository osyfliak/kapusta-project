import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { selectExpenses } from 'redux/transactions/transactions-selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransactionThunk,
  getExpenseTransactionsByThunk,
} from 'redux/transactions/operation';
import { selectUser } from 'redux/selector';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DenseTable() {
  const isUser = useSelector(selectUser);
  const expensesList = useSelector(selectExpenses);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!isUser) {
      return;
    }
    dispatch(getExpenseTransactionsByThunk());
  }, [dispatch, isUser]);
  const handleClick = id => {
    dispatch(deleteTransactionThunk(id))
      .unwrap()
      .then(() => dispatch(getExpenseTransactionsByThunk()));
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesList?.map(object => (
            <TableRow
              key={object._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {object.date.split('-').join('.')}
              </TableCell>
              <TableCell align="right">{object.description}</TableCell>
              <TableCell align="right">{object.category}</TableCell>
              <TableCell align="right">{object.amount}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  onClick={() => handleClick(object._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
