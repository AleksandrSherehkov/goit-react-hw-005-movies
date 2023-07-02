import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, OverlayStyled } from './Modal.styled';

const modalContainer = document.getElementById('modal');

export const Modal = ({ tags, largeImageURL, onCloseModal }) => {
  useEffect(() => {
    const handleModalCloseEsc = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleModalCloseEsc);
    return () => {
      window.removeEventListener('keydown', handleModalCloseEsc);
    };
  }, [onCloseModal]);

  const handleModalClose = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <OverlayStyled onClick={handleModalClose}>
      <ModalStyled>
        <img src={largeImageURL} alt={tags} />
      </ModalStyled>
    </OverlayStyled>,
    modalContainer
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
