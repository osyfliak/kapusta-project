import styled from 'styled-components';
// import Select from 'react-select';
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


export const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${DEVICE.tablet} {
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${DEVICE.laptop} {
    padding-top: 30px;
    flex-direction: row;
    justify-self: flex-start;
    flex-wrap: nowrap;
    padding: 0;
  }
`;

export const InputWrapper = styled.div`
  align-items: center;
  display: contents;
  flex-direction: column;
  border-bottom-left-radius: 30%;
  background-color: transparent;
  @media ${DEVICE.tablet} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
  }
  @media ${DEVICE.laptop} {
    height: 44px;
    text-align: center;
  }
`;

export const DateWrapper = styled.div`
  position: relative;
  margin-bottom: 32px;
  @media ${DEVICE.tablet} {
    margin-bottom: 0px;
  }
`;

export const DateSelection = styled.input`
  outline-color: #ff751d;
  vertical-align: middle;
  font-family: inherit;
  display: inline-block;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #52555f;
  background-color: transparent;
  border: none;
  width: 140px;
  padding: 10px 0;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border: 2px solid #f6f7fc;
  border-radius: 16px;
  @media ${DEVICE.tablet} {
    border: none;
    font-weight: 900;
    font-size: 12px;
    width: 90px;
    height: 100%;
    margin-right: 32px;
    text-align: end;
    padding: 0;
  }
  @media ${DEVICE.laptop} {
    width: 104px;
    padding-left: 20px;
    text-align: center;
  }
  &::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    z-index: 9;
    width: 90px;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
  }
`;

export const CalendarIcon = styled.svg`
  position: absolute;
  left: 11px;
  top: 11px;
  cursor: pointer;
  @media ${DEVICE.tablet} {
    left: -12px;
    top: -1px;
  }
  @media ${DEVICE.laptop} {
    left: -1px;
    top: 0px;
    text-align: center;
  }
`;

export const DescriptionInput = styled.input`
  display: block;
  font-family: inherit;
  width: 100%;
  height: 44px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  font-size: 12px;
  line-height: 1.14;
  text-align: start;
  background-color: transparent;
  padding-left: 30px;
  outline-color: #ff751d;
  border: 2px solid #ffffff;
  border-bottom: none;
  color: #52555f;
  &::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }
  @media ${DEVICE.tablet} {
    border-top-right-radius: 0px;
    border: 2px solid #f6f7fc;
    display: flex;
    padding-left: 12px;
  }
  @media ${DEVICE.laptop} {
    padding-left: 12px;
    /* width: 238px; */
  }
`;

export const SelectInput = styled.select`
  display: block;
  font-family: inherit;
  width: 100%;
  height: 44px;
  border: 2px solid #ffffff;
  border-bottom-right-radius: 16px;
  outline-color: #ff751d;
  color: #c7ccdc;
  @media ${DEVICE.tablet} {
    border: 2px solid #f6f7fc;
    border-left: none;
    border-right: none;
    border-bottom-right-radius: 0px;
  }
`;

export const CountWrapper = styled.div`
  position: relative;
  width: 183px;
  @media ${DEVICE.tablet} {
    display: flex;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 110px;
    border: 2px solid #f6f7fc;
  }
  @media ${DEVICE.laptop} {
    width: 121px;
  }
`;

export const CalculatorIcon = styled.svg`
  position: absolute;
  top: 34px;
  right: 12px;
  padding: 8px;
  border-left: 2px solid #f6f7fc;
  @media ${DEVICE.tablet} {
    border: none;
    right: 16px;
    top: 9px;
    padding: 0;
  }
  @media ${DEVICE.laptop} {
    right: 17px;
    top: 10px;
  }
`;

export const CountInput = styled.input`
  font-family: inherit;
  outline-color: #ff751d;
  width: 183px;
  height: 44px;
  padding-right: 55px;
  padding-left: 55px;
  border-radius: 22px;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.14;
  text-align: center;
  margin-top: 32px;
  color: #52555f;
  border: 2px solid #f6f7fc;
  background-color: transparent;
  @media ${DEVICE.tablet} {
    height: 40px;
    border: 2px solid #f6f7fc;
    width: 110px;
    margin-top: 0;
    padding-right: 45px;
    padding-left: 10px;
    border: transparent;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  @media ${DEVICE.laptop} {
    width: 121px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  gap: 20px;
  @media ${DEVICE.tablet} {
    margin-top: 32px;
  }
  @media ${DEVICE.laptop} {
    margin-left: 32px;
    margin-top: 0;
    gap: 15px;
  }
`;
