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

function formatNegativeNumber(num) {
  return `- ${num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH.`;
}

function formatDate(dateString) {
  var date = new Date(dateString);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}.${month
    .toString()
    .padStart(2, '0')}.${year}`;
}

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
        <TableHead
          sx={{
            '& th': {
              fontWeight: 700,
              textTransform: 'uppercase',
              backgroundColor: '#F5F6FB',
            },
          }}
        >
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="right">Sum</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesList?.map(object => (
            <TableRow
              key={object._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {formatDate(object.date)}
              </TableCell>
              <TableCell align="left">{object.description}</TableCell>
              <TableCell align="left">{object.category}</TableCell>
              <TableCell
                align="right"
                style={{ color: '#E7192E', fontWeight: 700 }}
              >
                {formatNegativeNumber(object.amount)}
              </TableCell>
              <TableCell align="center">
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
