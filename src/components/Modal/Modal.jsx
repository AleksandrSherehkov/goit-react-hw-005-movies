import PropTypes from "prop-types";
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, OverlayStyled } from './Modal.styled';

const modalContainer = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalClose);
  }

  handleModalClose = e => {
    const { onCloseModal } = this.props;
    if (e.target === e.currentTarget || e.code === 'Escape') {
      onCloseModal();
    }
  };

  render() {
    const { tags, largeImageURL } = this.props;
    return createPortal(
      <OverlayStyled onClick={this.handleModalClose}>
        <ModalStyled>
          <img src={largeImageURL} alt={tags} />
        </ModalStyled>
      </OverlayStyled>,
      modalContainer
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
