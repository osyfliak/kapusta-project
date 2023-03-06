import styled from 'styled-components';
import bgMobile from  "../../images/bgMobile.svg"
import backTwoCabages from  "../../images/backTwoCabages.svg"
import bgTablet from  "../../images/bgTablet.svg"
import bgBottomDesktop from  "../../images/bgBottomDesktop.svg"
import bgDesktop from  "../../images/bgDesktop.svg"



export const ContainerBox = styled.div`
  margin: 0 auto;
  min-width: 320px;
  min-height: 100vh;
  padding: 0px 20px 55px 20px;
  background-image: url(${bgMobile});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top left;

  @media screen and (min-width: 480px) and (max-width: 767px){\
    margin: 0 auto;
    width: 480px;
    min-height: 100vh;
    padding: 0px 20px 55px 20px;
    background-image: url(${bgMobile});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top left;
}

@media screen and (min-width: 768px) and (max-width: 1279px){
    margin: 0 auto;
    width: 768px;
    min-height: 100vh;
    /* height: 1200px; */
    padding: 0px 32px 60px 32px;
    background-image: url(${backTwoCabages}),
        url(${bgTablet});
    background-repeat: no-repeat;
    background-size: 183px, 100%;
    background-position: bottom 56px right 88px, top left;
}

@media screen and (min-width: 1280px){
    margin: 0 auto;
    width: 1280px;
    min-height: 100vh;
    padding: 0px 91px 60px 91px;
    background-image: url(${bgBottomDesktop}),
        url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: 1270px, 100%;
    background-position: bottom left 10px, top left;
}
`;

export const ContainerBoxReports = styled.div`
  margin: 0 auto;
  min-width: 320px;
  min-height: 100vh;
  padding: 0px 20px 55px 20px;
  background-image: url(${bgMobile});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top left;

  @media screen and (min-width: 480px) and (max-width: 767px){\
    margin: 0 auto;
    width: 480px;
    min-height: 100vh;
    padding: 0px 20px 55px 20px;
    background-image: url(${bgMobile});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top left;
}

@media screen and (min-width: 768px) and (max-width: 1279px){
    margin: 0 auto;
    width: 768px;
    min-height: 100vh;
    /* height: 1200px; */
    padding: 0px 32px 60px 32px;
    background-image: url(${backTwoCabages}),
        url(${bgTablet});
    background-repeat: no-repeat;
    background-size: 183px, 100%;
    background-position: bottom 56px right 88px, top left;
}

@media screen and (min-width: 1280px){
    
    margin: 0 auto;
    width: 1280px;
    min-height: 100vh;
    padding: 0px 123px 60px ;
    background-image: url(${bgBottomDesktop}),
        url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: 1270px, 100%;
    background-position: bottom left 10px, top left;
}
`;
