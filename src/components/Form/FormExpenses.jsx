import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import icon from '../../img/symbol-defs.svg';
import { ModalButtonOrange } from 'components/ModalLogOut/ModalButtonOrange';
import { ModalButtonWhite } from 'components/ModalLogOut/ModalButtonWhite';
import {
  ButtonWrapper,
  CalculatorIcon,
  CalendarIcon,
  CountInput,
  CountWrapper,
  DateSelection,
  DateWrapper,
  DescriptionInput,
  FormWrapper,
  InputWrapper,
  SelectInput,
} from './Form.styled';
import {
  getExpenseCategoriesThunk,
  addExpenseTransactionThunk,
  getExpenseTransactionsByThunk,
} from 'redux/transactions/operation';
import { selectCategoryExpenses } from 'redux/transactions/transactions-selectors';
import { setTypeAction } from 'redux/transactions/transactions-slice';
import { selectUser } from 'redux/selector';
import { toast } from 'react-toastify';

const FormExpenses = () => {
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const categoriesArray = useSelector(selectCategoryExpenses);
  const isUser = useSelector(selectUser);

  useEffect(() => {
    if (!isUser) {
      return;
    }
    dispatch(getExpenseCategoriesThunk());
    dispatch(setTypeAction('expenses'));
  }, [dispatch, isUser]);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (description.trim().length === 0 || !amount || !category)
      return toast.info('Enter the data in the form', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      }); // toast.warning('Missing required fields');

    dispatch(
      addExpenseTransactionThunk({
        description,
        amount: Number(amount),
        category,
        date,
      })
    )
      .unwrap()
      .then(() => dispatch(getExpenseTransactionsByThunk()));
    handleClear();
  };

  const handleClear = () => {
    setDescription('');
    setAmount('');
    setCategory('');
    setDate(moment(new Date()).format('YYYY-MM-DD'));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };

  return (
    <FormWrapper autoComplete="off" onSubmit={handleSubmit}>
      <InputWrapper>
        <DateWrapper>
          <DateSelection
            aria-label="Date"
            name="date"
            dateFormat="yyyy-MM-dd"
            onChange={handleChange}
            type="date"
            value={date}
          />
          <CalendarIcon width={20} height={17}>
            <use href={`${icon}#icon-calendar`}></use>
          </CalendarIcon>
        </DateWrapper>
        <DescriptionInput
          placeholder="Product description"
          name="description"
          aria-label="Text"
          onChange={handleChange}
          type="text"
          value={description}
        />
        <SelectInput name="category" value={category} onChange={handleChange}>
          <option value="category">Product category</option>
          {categoriesArray?.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectInput>
        <CountWrapper>
          <CountInput
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="00.00"
            min={0}
            value={amount}
          />

          <CalculatorIcon>
            <svg width="20" height="20">
              <use href={`${icon}#icon-calculator`}></use>
            </svg>
          </CalculatorIcon>
        </CountWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <ModalButtonOrange type="submit">Input</ModalButtonOrange>

        <ModalButtonWhite type="button" closeModal={handleClear}>
          Clear
        </ModalButtonWhite>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default FormExpenses;
