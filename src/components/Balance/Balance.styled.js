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
const TRANSITION = {
  duration: '300ms',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  delay: '0ms',
};

export const Wrapper = styled.section`
  background-color: #f2f5fc;
  padding: 20px 20px;
  justify-content: center;

  @media ${DEVICE.tablet} {
    display: flex;
    justify-content: start;
    align-items: baseline;
    flex-direction: row;
    margin-top: 0px;
    padding: 20px 32px;
  }
  @media ${DEVICE.laptop} {
    justify-content: start;
    align-items: baseline;
    flex-direction: row;
    margin-left: 0;
    flex-grow: 1;
    padding: 20px 16px;
  }
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 0 0 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 0.02em;
  color: rgba(82, 85, 95, 0.7);
  @media ${DEVICE.tablet} {
    margin: 0 21px 0 36px;
  }
  @media ${DEVICE.laptop} {
    margin: 0 20px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${DEVICE.tablet} {
    align-items: center;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 144px;
  height: 44px;
  padding: 1px 46px 1px 1px;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  color: #000000;
  text-align: right;
  text-transform: uppercase;

  border: 2px solid #ffffff;
  border-radius: 22px 0 0 22px;
  background-color: transparent;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-moz-outer-spin-button,
  ::-moz-inner-spin-button {
    -moz-appearance: none;
  }
  ::-ms-outer-spin-button,
  ::-ms-inner-spin-button {
    -ms-appearance: none;
  }
  @media ${DEVICE.tablet} {
    margin-right: 15px;
    border-radius: 16px;
    width: 125px;
  }

  &::placeholder {
    font-weight: 700;
    font-size: 13px;
    line-height: 1.17;
    letter-spacing: 0.02em;
    color: #000000;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 144px;
  height: 44px;
  padding: 1px 16px;

  font-family: inherit;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  text-align: left;
  color: rgba(82, 85, 95, 0.7);

  border: 2px solid #ffffff;
  border-left: none;
  border-radius: 0 22px 22px 0;
  cursor: pointer;
  background-color: transparent;
  transition: color ${TRANSITION.duration} ${TRANSITION.timing}
      ${TRANSITION.delay},
    background-color ${TRANSITION.duration} ${TRANSITION.timing}
      ${TRANSITION.delay},
    border-color ${TRANSITION.duration} ${TRANSITION.timing} ${TRANSITION.delay};
  &:focus,
  &:hover {
    color: #ffffff;
    background-color: #ff751d;
    border-color: #ff751d;
  }
  @media ${DEVICE.tablet} {
    width: 125px;
    border-radius: 16px;
    border: 2px solid #ffffff;
    justify-content: center;
    padding: 0;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 16px;
  right: 15px;
  font-weight: 700;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  text-transform: none;
  color: #000000;
  @media ${DEVICE.tablet} {
    margin-right: 20px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
`;
