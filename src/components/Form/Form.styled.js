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
    padding: 24px 40px;
    background-color: #fff;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 0px 0px;
  }
  @media ${DEVICE.laptop} {
    padding-top: 32px;
    flex-direction: row;
    justify-self: flex-start;
    flex-wrap: nowrap;
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
  display: none;
  @media ${DEVICE.tablet} {
    display: block;
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
  max-width: 280px;
  height: 44px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  font-size: 12px;
  line-height: 1.17;
  text-align: start;
  background-color: transparent;
  padding-left: 20px;
  outline-color: #ff751d;
  border: 2px solid #ffffff;
  border-bottom: none;
  &::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }
  @media ${DEVICE.tablet} {
    border-top-right-radius: 0px;
    border: 2px solid #f6f7fc;
    max-width: 186px;
    padding-left: 20px;
  }
  @media ${DEVICE.laptop} {
    padding-left: 12px;
    max-width: 290px;
  }
`;

export const SelectInput = styled.select`
color: black;
  display: block;
  font-family: inherit;
  width: 100%;
  max-width: 280px;
  height: 44px;
  font-size: 12px;
  line-height: 1.17;
  text-align: start;
  border: 2px solid #ffffff;
  border-bottom-right-radius: 16px;
  outline-color: #ff751d;
  color: #c7ccdc;
  background-color: transparent;
  padding: 0 20px;
  &::placeholder {
    font-weight: 400;
    color: #c7ccdc;
  }
  @media ${DEVICE.tablet} {
    border: 2px solid #f6f7fc;
    border-left: none;
    border-right: none;
    border-bottom-right-radius: 0px;
    max-width: 186px;
    padding-left: 20px;
  }
`;

export const CountWrapper = styled.div`
  width: 183px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 22px 22px;
  margin-top: 32px;
  @media ${DEVICE.tablet} {
    display: flex;
    border-radius: 0 16px 16px 0;
    width: fit-content;
    border: 2px solid #f6f7fc;
    margin-top: 0;
  }
  @media ${DEVICE.laptop} {
    width: 121px;
  }
`;

export const CountInput = styled.input`
  font-family: inherit;
  outline-color: #ff751d;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.14;
  max-width: 120px;
  color: #52555f;
  border: transparent;
  background-color: transparent;
  padding-right: 18px;
  text-align: end;
  @media ${DEVICE.tablet} {
    height: 40px;
    border: 2px solid #f6f7fc;
    width: 110px;
    margin-top: 0;
    padding-right: 12px;
    border: transparent;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  @media ${DEVICE.laptop} {
    width: 80px;
  }
`;

export const CalculatorIcon = styled.div`
  border-radius: 0 22px 22px 0;
  border-left: 2px solid #fff;
  padding: 10px 21px 13px;
  @media ${DEVICE.tablet} {
    padding: 8px 14px 14px 0;
  }
  @media ${DEVICE.laptop} {
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

export const OptionCat = styled.option`

&:before,
&:after{
  color: #000000;
  background-color: #D8093A !important;
}

`