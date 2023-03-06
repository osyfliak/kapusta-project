import { NavLink } from 'react-router-dom';
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

export const TabLink = styled(NavLink)`
  display: none;
  border-radius: 20px 20px 0px 0px;
  background-color: #fafbfd;
  color: #000000;

  width: 138px;
  height: 40px;

  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;

  &.active {
    color: #ff751d;
    background-color: #fff;
  }

  @media ${DEVICE.tablet} {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;
