import styled from 'styled-components';


export const TableBodyList = styled.tr`
  height: 40px;
  border: 2px solid '#F5F6FB;
`;

export const TableBodyItem = styled.td`
  height: 100%;
  width: calc(746px / 5);

  text-align: center;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  line-height: calc(14 / 12);
  letter-spacing: 0.04em;

  color: #52555f;

  :nth-child(4) {
    font-weight: 700;
    color: #407946;
  }
  :nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border: none;
  border-radius: 50%;

  background-color: #F5F6FB;
  cursor: pointer;

  :hover,
  :focus {
    background-color:#FF751D;
  }
`;