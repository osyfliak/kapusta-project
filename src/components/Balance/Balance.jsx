import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch} from 'react-redux';
// import { setBalance } from 'redux/auth/operations';
// import { selectBalance, selectFirstBalance } from 'redux/auth/selectors';

import {
  Form,
  Title,
  Input,
  Button,
  Wrapper,
  Label,
  InputContainer,
} from './Balance.styled';

const Balance = () => {
  const balance = useSelector(selectBalance);
  const [value, setValue] = useState(balance ?? 0);
  // const currentBalance = useSelector(selectBalance);
  // const firstBalance = useSelector(selectFirstBalance);
  const firstBalance = 0
  const body = document.querySelector('body');

  const dispatch = useDispatch();


  useEffect(() => {
    setValue(currentBalance.toFixed(2));
  }, [currentBalance]);


  const onSubmit = e => {
    e.preventDefault();
    // dispatch(setBalance({ balance: e.target.elements.balance.value }));
    body.classList.remove('no-scroll');
  };

  const onChange = e => {
    setValue(e.target.value);
  };
  const formatNumber = value => {

  return value
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
  return (
    <Wrapper>
      <Title>Balance:</Title>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input
            type="number"
            readOnly={firstBalance}
            name="balance"
            pattern="[0-9, .UAH]*"
            value={formatNumber}
            onChange={onChange}
          />
          <Label>UAH</Label>
        </InputContainer>
        {!firstBalance && <Button type="submit">CONFIRM</Button>}
      </Form>
    </Wrapper>
  );
};

export default Balance;