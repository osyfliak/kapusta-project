import styled from 'styled-components';

const TRANSITION = {
  duration: '300ms',
  timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  delay: '0ms',
};

export const Title = styled.h2`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.143;
  color: rgba(82, 85, 95, 0.7);
  text-align: center;
`;
export const ContainerPeriod = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7px;
`;

export const Text = styled.p`
  font-style: normal;
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.143;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  width: 134px;
  text-align: center;
  color: #000000;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: white;
  cursor: pointer;
  background-color: transparent;
  transition: transform ${TRANSITION.duration} ${TRANSITION.timing}
    ${TRANSITION.delay};
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
