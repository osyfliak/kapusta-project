import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';
// import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';

import icon from '../../img/symbol-defs.svg';

// import { addTransaction } from 'redux/transaction/operations';
// import { selectOperationType } from 'redux/transaction/selectors';

// import { Button } from 'components/UI/Button/Button';

import { customStyles } from './customStyles';

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

import { ModalButtonOrange } from 'components/ModalLogOut/ModalButtonOrange';
import { ModalButtonWhite } from 'components/ModalLogOut/ModalButtonWhite';

const OperationsForm = ({ value }) => {
  const isScreenMoreTablet = useMediaQuery('(min-width: 768px)');
  // const { t } = useTranslation();
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const dispatch = useDispatch();
  // const type = useSelector(selectOperationType);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (description.trim().length === 0 || !category || !amount) {
      return
      // toast.warning('Missing required fields');
    }
    const userEnteredData = {
      // operation: type,
      description: description,
      date: date,
      category: category.value,
      amount: amount,
      month: moment(date).format('MMMM'),
      year: moment(date).format('YYYY'),
      currency: 'UAH',
    };
    // console.log(userEnteredData);
    // dispatch(addTransaction(userEnteredData));
    resetForm();
    return;
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

      default:
        break;
    }
  };

  const resetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
    setAmount('');
  };

  useEffect(() => {
    if (value) {
      resetForm();
    }
  }, [value]);

  // let actualOptions = '';
  // if (type === 'expenses') {
  //   actualOptions = expensesCategory;
  // } else {
  //   actualOptions = incomeCategory;
  // }
  // const ProductCateg = t('Product category', { returnObjects: true });
  // const Typeofincome = t('Type of income', { returnObjects: true });

  // let actualPlaceholder = '';
  // if (type === 'expenses') {
  //   actualPlaceholder = ProductCateg;
  // } else {
  //   actualPlaceholder = Typeofincome;
  // }

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
          placeholder= 'Product description'
          name="description"
          aria-label="Text"
          onChange={handleChange}
          type="text"
          value={description}
        />
        <SelectInput
          aria-label="Select"
          // placeholder={actualPlaceholder}
          width="200px"
          styles={customStyles}
          value={category}
          onChange={setCategory}
          isSearchable={false}
          // options={actualOptions}
          
        />
        <CountWrapper>
          <CountInput
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="00.00"
            min={0}
            value={amount}
          />
          <CalculatorIcon
            width={isScreenMoreTablet ? 20 : 40}
            height={isScreenMoreTablet ? 20 : 40}
          >
            <use href={`${icon}#icon-calculator`}></use>
          </CalculatorIcon>
        </CountWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <ModalButtonOrange type="submit" design="operation">
          Input
        </ModalButtonOrange>
        <ModalButtonWhite
          type="button"
          design="operation"
          onClick={resetForm}
        >
          Clear
        </ModalButtonWhite>
      </ButtonWrapper>
    </FormWrapper>
  );
};


export default OperationsForm;