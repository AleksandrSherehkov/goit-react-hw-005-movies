import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItemImage, ImageGalleryItemStyled } from './ImageGalleryItem.styled';

import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <ImageGalleryItemStyled>
        <ImageGalleryItemImage onClick={this.toggleModal} src={webformatURL} alt={tags} />
        {isModalOpen && (
          <Modal tags={tags} largeImageURL={largeImageURL} onCloseModal={this.toggleModal} />
        )}
      </ImageGalleryItemStyled>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
