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

export const WrapperBalanceReports = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  background-color: #f2f5fc;
  padding: 20px 20px;

  @media ${DEVICE.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 0px;
    padding: 40px 32px 60px;
  }
  @media ${DEVICE.laptop} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-left: 0;
    flex-grow: 1;
    padding: 40px 123px 8px;
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  margin-right: 90%;
  align-items: center;
  text-decoration: none;
  margin-bottom: 16px;
  }
  @media ${DEVICE.tablet} {
    margin-bottom: 0px;
    margin-right: 0;
  }
`;
export const TextLitkReports = styled.p`
  display: none;
  @media ${DEVICE.tablet} {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: 0.04em;
    color: rgba(82, 85, 95, 0.7);
    display: block;
    margin-left: 15px;
  }
  @media ${DEVICE.laptop} {
    margin-left: 16px;
  }
`;
