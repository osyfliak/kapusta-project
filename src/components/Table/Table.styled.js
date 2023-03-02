import styled from 'styled-components';


export const TransactionBox = styled.div`
  overflow: hidden;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media screen and (min-width: 1200px) {
    width: 624px;
  }

  @media screen and (min-width: 1200px) {
    width: 746px;
    height: 400px;
  }
`;

export const TableBox = styled.table`
  width: 100%;

  border: none;

  border-spacing: 0;
  border-collapse: collapse;

  table-layout: fixed;

  @media screen and (min-width: 1200px) {
    width: 746px;
    height: 400px;
  }
`;

export const TableTitle = styled.tr``;

export const TableTitleItem = styled.th`
  width: calc(100% / 5);
  height: 40px;

  border-spacing: 0;

  background-color: #F5F6FB;
  text-transform: uppercase;
`;

export const TableBodys = styled.tbody`
  display: block;
  overflow-y: auto;
  width: 746px;
  max-height: 400px;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F6FB;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;

    background-color: #FF751D;
  }
`;