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

export const Wrapper = styled.section`
  height: 85px;
  background: #ffffff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 32px 0;
  }
  @media ${DEVICE.tablet} {
    height: 50px;
    border-radius: 30px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    margin: 32px 0;
  }
  @media ${DEVICE.laptop} {
    margin: 32px 0;
  }
`;
export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  margin-bottom: 4px;
  color: #52555f;
  @media ${DEVICE.tablet} {
    margin-right: 15px;
    margin-bottom: 0;
  }
`;

export const Sum = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: #e53935;
`;
export const SumPositive = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  color: #407946;
`;

export const ExpensesContainer = styled.div`
  width: 100%;
  text-align: center;
  @media ${DEVICE.tablet} {
    justify-content: right;
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;
export const IncomeContainer = styled.div`
  width: 100%;
  text-align: center;
  @media ${DEVICE.tablet} {
    display: flex;
  }
`;

export const Line = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 2px;
  height: 70px;
  background-color: #e0e5eb;
  @media ${DEVICE.tablet} {
    margin-left: 20px;
    margin-right: 20px;
    height: 36px;
  }
`;
