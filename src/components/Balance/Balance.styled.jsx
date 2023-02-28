import styled from 'styled-components';

const StyledBalance = styled.div`
  width: 230px;
  text-align: center;
  /* font-family: 'Roboto'; */
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  border-radius: 30px 30px 30px 0px;
  background-color: #f5f6fb;
`;
const Title = styled.p`
  font-weight: 700;
  padding: 12px;
  margin: 0;
  border-bottom: 4px solid #ffffff;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Month = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  &:not(:last-child) {
    border-bottom: 2px solid #ffffff;
  }
`;

export { StyledBalance, Title, List, Month };
