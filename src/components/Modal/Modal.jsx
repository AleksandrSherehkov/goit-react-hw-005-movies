import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled, OverlayStyled } from './Modal.styled';

const modalContainer = document.getElementById('modal');

export class Modal extends Component {
  render() {
    return createPortal(
      <OverlayStyled>
        <ModalStyled>
          <img src="" alt="" />
        </ModalStyled>
      </OverlayStyled>,
      modalContainer
    );
  }
}
