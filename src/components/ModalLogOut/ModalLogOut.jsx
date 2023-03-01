import { useState } from 'react';
import {
  Backdrop,
  Button,
  ButtonDiv,
  CloseBtn,
  Confirm,
  Content,
  Modal,
  Title,
} from './Modal.styled';
import { GrClose } from 'react-icons/gr';

export const ModalLogOut = ({ title }) => {
  const [modal, setModal] = useState();

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Confirm onClick={toggleModal}>Exit</Confirm>
      {modal && (
        <Modal>
          <Backdrop onClick={toggleModal}>
            <Content>
              <Title>{title}</Title>
              <ButtonDiv>
                <Button>YES</Button>
                <Button>NO</Button>
              </ButtonDiv>
              <CloseBtn onClick={toggleModal}>
                <GrClose size={18} />
              </CloseBtn>
            </Content>
          </Backdrop>
        </Modal>
      )}
    </>
  );
};
