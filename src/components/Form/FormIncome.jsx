import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import moment from 'moment';
import icon from '../../img/symbol-defs.svg';
import { customStyles } from './customStyles';
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
import { getIncomeCategoriesThunk, addIncomeTransactionThunk } from 'redux/transactions/operation';
import { selectCategory } from 'redux/transactions/transactions-selectors';
import { selectUser } from 'redux/selector';



const OperationsForm = () => {
  const isScreenMoreTablet = useMediaQuery('(min-width: 768px)');
  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const categoriesArray = useSelector(selectCategory);
  const isUser = useSelector(selectUser); 


  useEffect(() => {
    if (!isUser) {
return
}
    dispatch(getIncomeCategoriesThunk()); 
  }, [dispatch]);


  const handleSubmit = evt => { 
    evt.preventDefault(); 
    if (description.trim().length === 0  || !amount) return;// toast.warning('Missing required fields'); 

    dispatch( 
      addIncomeTransactionThunk({ 
        description, 
        amount: Number(amount), 
        category, 
        date, 
      }) 
      // category: category.value,
       // month: moment(date).format('MMMM'),
      // year: moment(date).format('YYYY'),
      // currency: 'UAH'
    ); 
    handleClear()
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
          placeholder= 'Product description'
          name="description"
          aria-label="Text"
          onChange={handleChange}
          type="text"
          value={description}
        />
        {/* <SelectInput
          aria-label="Select"
          placeholder="Product category"
          width="200px"
          styles={customStyles}
          value={category}
          onChange={setCategory}
          isSearchable={false}
          options={categoriesArray}
          
        /> */}

        <SelectInput 
              name="category" 
              value={category} 
              onChange={handleChange} 
            > 
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
          <CalculatorIcon
            width={isScreenMoreTablet ? 20 : 40}
            height={isScreenMoreTablet ? 20 : 40}
          >
            <use href={`${icon}#icon-calculator`}></use>
          </CalculatorIcon>
        </CountWrapper>
      </InputWrapper>
      <ButtonWrapper>
        <ModalButtonOrange type="submit" >
          Input
        </ModalButtonOrange>

        <ModalButtonWhite
          type="button"
             onClick={handleClear}
        >
          Clear
        </ModalButtonWhite>
      </ButtonWrapper>
    </FormWrapper>
  );
};


export default OperationsForm;