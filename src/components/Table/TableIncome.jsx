import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { selectIncomes } from 'redux/transactions/transactions-selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransactionThunk,
  getIncomeTransactionsByThunk,
} from 'redux/transactions/operation';
import { selectUser } from 'redux/selector';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function formatDate(dateString) {
  var date = new Date(dateString);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  return `${day.toString().padStart(2, '0')}.${month
    .toString()
    .padStart(2, '0')}.${year}`;
}

function formatPositiveNumber(num) {
  return `${num
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} UAH.`;
}

export default function DenseTable() {
  const isUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const incomesList = useSelector(selectIncomes);
  React.useEffect(() => {
    if (!isUser) {
      return;
    }
    dispatch(getIncomeTransactionsByThunk());
  }, [dispatch, isUser]);
  const handleClick = id => {
    dispatch(deleteTransactionThunk(id))
      .unwrap()
      .then(() => dispatch(getIncomeTransactionsByThunk()));
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
          {incomesList?.map(object => (
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
                style={{ color: '#407946', fontWeight: 700 }}
              >
                {formatPositiveNumber(object.amount)}
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
