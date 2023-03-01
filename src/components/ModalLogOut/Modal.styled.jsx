import styled from 'styled-components';

export const Confirm = styled.button`
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;


export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background: rgba(49, 49, 49, 0.8);
`;
export const Button = styled.button`
  width: 125px;
  height: 44px;
  border-radius: 16px;
  font-size: 12px;
  line-height: 1.1667;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background-color: #F5F6FB;
  color: #52555F;
  border-color: rgba(245, 246, 251, 1);
  text-align: center;
  &:hover{
    background-color: #FF751D;
    color: #ffffff;
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
  border-radius: 30px;
  padding: 50px 58px 60px 58px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: #ffffff;
  color: rgba(82, 85, 95, 1);
  background-color: #ffffff;
  cursor: pointer;
  color: #FF751D;
  &:hover{
    fill: currentColor;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1428;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: #52555f;
  margin-bottom: 20px;
`;
