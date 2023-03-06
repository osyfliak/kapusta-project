import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  gap: 35px;
  background-color: #f2f5fc;
  padding: 20px 0;

  @media ${DEVICE.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: row;
    margin-top: 0px;
    padding: 40px 32px 60px;
  }
  @media ${DEVICE.laptop} {
    justify-content: flex-end;
    align-items: baseline;
    flex-direction: row;
    margin-left: 0;
    flex-grow: 1;
    padding: 40px 91px 8px;
  }
`;

export const ReportLink = styled(Link)`
  color: rgba(82, 85, 95, 0.7);
  display: flex;
  font-style: normal;
  font-weight: normal;
  align-items: baseline;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  align-items: center;
  text-align: center;
  text-decoration: none;

  @media ${DEVICE.laptop} {
    margin-left: 230px;
  }
`;
export const TitleLink = styled.h3`
  margin: 0 20px 0 0;
  vertical-align: center;
  font-size: 12px;
  letter-spacing: 0.04em;
  font-style: normal;
  font-weight: 400;
  color: rgba(82, 85, 95, 0.7);
  @media ${DEVICE.tablet} {
    margin-bottom: 0;
    justify-content: end;
  }
`;
export const TransactionLink = styled(Link)`
  display: flex;
  color: rgba(82, 85, 95, 0.7);
  display: flex;
  margin-right: 60%;
  align-items: baseline;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  align-items: center;
  text-align: center;
  text-decoration: none;
  @media ${DEVICE.tablet} {
    display: none;
  }
`;
export const TextLitk = styled.h3`
  margin: 0 0 0 7px;
  vertical-align: center;
  font-size: 10px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  color: #000000;
`;
