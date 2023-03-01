import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import logoutImg from '../../../images/logout.svg';
import { selectIsLoggedIn, selectUser } from 'redux/selector';
import {
  StyledAuthNav,
  StyledLoginLabel,
  StyledLoginName,
  StyledLogoutImg,
  StyledVerticalLine,
  StyledExitButton,
} from './AuthNav.styled';
import { LightModalWindow } from '../LightModalWindow/LightModalWindow';


export const AuthNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUser);
  const dispatch = useDispatch();

 
  const handleClick = () => {
    dispatch(logOut());
  };
 
  const handleModalOpen = () => {
    setModalOpen(true);
  };
 
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    isLoggedIn && (
      <>
        <StyledAuthNav>
        
          <StyledLoginLabel>{userEmail[0].toUpperCase()}</StyledLoginLabel>
        
          <StyledLoginName>{userEmail}</StyledLoginName>
        
          <StyledLogoutImg
            src={logoutImg}
            alt="logout"
            onClick={handleModalOpen}
          />
          
          <StyledVerticalLine></StyledVerticalLine>
        
          <StyledExitButton type="button" onClick={handleModalOpen}>
            Exit
          </StyledExitButton>
        </StyledAuthNav>
     
        {modalOpen && (
          <LightModalWindow
            closeModal={handleModalClose}
            dispatch={handleClick}
          >
            Do you really want to leave?
          </LightModalWindow>
        )}
      </>
    )
  );
};
