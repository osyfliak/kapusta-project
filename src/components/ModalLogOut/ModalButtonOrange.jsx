import PropTypes from 'prop-types';
import { OrangeButton } from './Buttons.styled';

// Shared button for modal windows
export const ModalButtonOrange = ({
  children,
  dispatch,
  closeModal,
  changeBalance,
}) => {
  const handleClick = () => {
    // Check if user want to logout
    if (children === 'YES') {
      dispatch();
      closeModal();
    }
    // Check if user want to update balance
    if (changeBalance) {
      dispatch();
      closeModal();
    }
  };

  return (
    <OrangeButton onClick={handleClick}>{children}</OrangeButton>
  );
};

ModalButtonOrange.propTypes = {
  children: PropTypes.string.isRequired,
  dispatch: PropTypes.func,
  closeModal: PropTypes.func,
  changeBalance: PropTypes.func,
};