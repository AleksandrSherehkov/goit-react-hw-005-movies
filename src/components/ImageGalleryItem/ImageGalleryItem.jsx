import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItemImage, ImageGalleryItemStyled } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ImageGalleryItemStyled>
      <ImageGalleryItemImage onClick={toggleModal} src={webformatURL} alt={tags} />
      {isModalOpen && (
        <Modal tags={tags} largeImageURL={largeImageURL} onCloseModal={toggleModal} />
      )}
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
