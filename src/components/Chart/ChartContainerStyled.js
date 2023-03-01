import styled from 'styled-components';

export const ChartContainerStyled = styled.div`
  @media screen and (max-width: 767px) {   
      width: 280px;
      padding: 0;
      margin-bottom: 52px;   
      background: #E5E5E5;
  }
  @media screen and (min-width: 768px) {   
      width: 704px;
      padding: 50px 49px 44px 50px;
      margin-bottom: 80px;
      background: #ffffff;
      box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
      border-radius: 30px;    
  }  
  @media screen and (min-width: 1280px) {   
      width: 1034px;
      padding: 50px 214px 44px 215px;      
  }    
`;

export default ChartContainerStyled;
