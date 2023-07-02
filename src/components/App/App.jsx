import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { GlobalStyle } from 'services/styles/GlobalStyle';
import { WrapperStyled } from './App.styled';

import { useFetchFotos } from 'hook/useFetchFotos';

export const App = () => {
  const { fotos, total, isLoading, updateSearchQuery, updatePage } = useFetchFotos();

  return (
    <>
      <WrapperStyled>
        <Searchbar updateSearchQuery={updateSearchQuery} />
        <ImageGallery fotos={fotos} />
        {isLoading && <Loader />}
        {fotos.length > 0 && fotos.length < total && <Button updatePage={updatePage} />}
      </WrapperStyled>
      <GlobalStyle />
    </>
  );
};
