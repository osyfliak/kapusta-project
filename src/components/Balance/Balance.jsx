import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserBalance } from 'redux/balance/operations';
import { selectBalance } from 'redux/balance/selectBalance';

import {
  Form,
  Title,
  Input,
  Button,
  Wrapper,
  Label,
  InputContainer,
  ReportLink,
  TitleLink,
  WrapperForm,
  TextLitk,
  TransactionLink,
} from './Balance.styled';
import ModalBalance from './ModalBalance';
import Icon from '../../img/symbol-defs.svg';

const Balance = () => {
  const currentBalance = useSelector(selectBalance);
  const [value, setValue] = useState(currentBalance ?? 0);
  const [promptClose, setPromptClose] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(currentBalance.toFixed(2));
  }, [currentBalance]);

  const toggleWindow = () => {
    setPromptClose(prev => !prev);
  };

  const onSubmit = e => {
    e.preventDefault();

    const data = e.target.elements.balance.value;
    const number = Number(data);
    dispatch(setUserBalance({ balance: number }));
    if (currentBalance) {
      setPromptClose(prev => !prev);
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <WrapperForm>
          <Title>Balance:</Title>
          <Form onSubmit={onSubmit}>
            <InputContainer>
              <Input
                type="number"
                readOnly={currentBalance}
                name="balance"
                pattern="[0-9, .UAH]*"
                value={value}
                onChange={onChange}
              />
              <Label>UAH</Label>
            </InputContainer>
            {promptClose && !currentBalance && (
              <ModalBalance onClose={toggleWindow} />
            )}
            {
              <Button type="submit" disabled={currentBalance}>
                CONFIRM
              </Button>
            }
          </Form>
        </WrapperForm>
        <ReportLink to="/reports">
          <TitleLink>to transaction</TitleLink>
          <svg alt="logo" width={14} height={14}>
            <use href={`${Icon}#icon-Vector`}></use>
          </svg>
        </ReportLink>
        <TransactionLink to="/reports">
          <svg alt="logo" width={14} height={14}>
            <use href={`${Icon}#icon-Vector-Back`}></use>
          </svg>
          <TextLitk>Reports</TextLitk>
        </TransactionLink>
      </Wrapper>
    </>
  );
};

export default Balance;
