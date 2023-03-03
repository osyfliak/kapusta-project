import styled from 'styled-components';

const SIZE = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1280px',
};
const DEVICE = {
  mobile: `screen and (min-width: ${SIZE.mobile})`,
  tablet: `screen and (min-width: ${SIZE.tablet})`,
  laptop: `screen and (min-width: ${SIZE.laptop})`,
};

const StyledSummary = styled.div`
  display: none;
  width: 230px;
  height: min-content;
  text-align: center;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.17;
  border-radius: 30px 30px 30px 0px;
  background-color: #f5f6fb;
  margin-top: 40px;

  @media ${DEVICE.TABLET} {
    display: block;
  }
  @media ${DEVICE.DESKTOP} {
    margin-top: 0;
  }
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

export { StyledSummary, Title, List, Month };
