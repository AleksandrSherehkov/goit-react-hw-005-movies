// import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItemImage, ImageGalleryItemStyled } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ fotos }) => {
  return fotos.map(({ id, webformatURL, tags }) => (
    <ImageGalleryItemStyled key={id}>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
      {/* <Modal /> */}
    </ImageGalleryItemStyled>
  ));
};
