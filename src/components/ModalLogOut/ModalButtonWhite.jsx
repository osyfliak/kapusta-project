import PropTypes from 'prop-types';
import { WhiteButton } from './Buttons.styled';

export const ModalButtonWhite = ({ children, closeModal, type }) => {
  return <WhiteButton type={type} onClick={closeModal}>{children}</WhiteButton>;
};

ModalButtonWhite.propTypes = {
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};
