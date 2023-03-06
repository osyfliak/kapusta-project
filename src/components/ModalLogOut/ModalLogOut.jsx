import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  Backdrop,
  ModalContent,
  Title,
  ButtonsBox,
  CloseButton,
  Modal,
} from './Modal.styled';
import close from '../../images/close.svg';
import { ModalButtonOrange } from './ModalButtonOrange';
import { ModalButtonWhite } from './ModalButtonWhite';


const modalRoot = document.getElementById('modal-root');
const body = document.querySelector('body');


export const ModalLogOut = ({
  children,
  closeModal,
  dispatch,
  changeBalance,
  text,
}) => {
 

 
  const handleBackdropClose = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
 
  useEffect(() => {
    const handleEscapeClose = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscapeClose);

    return () => {
      window.removeEventListener('keydown', handleEscapeClose);
      body.classList.toggle('no-scroll');
    };
  },[closeModal]);

  return createPortal(
    // Backdrop
    <Backdrop
      className="modal-backdrop"
      onClick={handleBackdropClose}
    >
      
      <Modal>
       
        <CloseButton onClick={closeModal}>
          <img src={close} alt="close" />
        </CloseButton>
        <ModalContent>
          <Title>{children}</Title>
          <ButtonsBox>
            <ModalButtonOrange
              dispatch={dispatch}
              closeModal={closeModal}
              changeBalance={changeBalance}
            >
              {text ? text : 'YES'}
            </ModalButtonOrange>
            <ModalButtonWhite closeModal={closeModal}>NO</ModalButtonWhite>
          </ButtonsBox>
        </ModalContent>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

ModalLogOut.propTypes = {
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  changeBalance: PropTypes.func,
  text: PropTypes.string,
};

