import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, OverlayStyled } from './Modal.styled';

const modalContainer = document.getElementById('modal');

export const Modal = ({ tags, largeImageURL, onCloseModal }) => {
  
  const handleModalCloseEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    },
    [onCloseModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleModalCloseEsc);
    return () => {
      window.removeEventListener('keydown', handleModalCloseEsc);
    };
  }, [handleModalCloseEsc]);

  const handleModalClose = e => {
    if (e.target === e.currentTarget) {
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
