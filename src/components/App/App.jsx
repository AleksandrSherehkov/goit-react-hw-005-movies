import React, { Component } from 'react';

import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { GlobalStyle } from 'services/styles/GlobalStyle';
import { WrapperStyled } from './App.styled';
import { getEditorChoiceFotos, getSearchFotos } from 'services/fotosApi';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    fotos: [],
    total: 0,
    page: 1,
    isLoading: false,
  };
  updateSearchQuery = query => {
    this.setState({ query, fotos: [], page: 1, total: 0 });
  };

  componentDidMount() {
    this.setEditorChoiceFoto();
  }

  componentDidUpdate(_, prevState) {
    const { page, query } = this.state;

    if (query !== prevState.query || (page !== prevState.page && query)) {
      this.setSearchFotos();
    }

    if (page !== prevState.page && !query) {
      this.setEditorChoiceFoto();
    }
  }

  setEditorChoiceFoto = async () => {
    const { page } = this.state;
    this.setState({ isLoading: true });

    try {
      const {
        data: { hits, total },
      } = await getEditorChoiceFotos(page);

      this.setState(prevState => ({
        fotos: [...prevState.fotos, ...hits],
        total,
      }));
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setSearchFotos = async () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    try {
      const {
        data: { hits, total },
      } = await getSearchFotos(page, query);
      this.setState(prevState => ({
        fotos: [...prevState.fotos, ...hits],
        total,
      }));
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  updatePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { fotos, total, isLoading } = this.state;
    return (
      <>
        <WrapperStyled>
          <Searchbar updateSearchQuery={this.updateSearchQuery} />
          <ImageGallery fotos={fotos} />
          {isLoading && <Loader />}
          {fotos.length > 0 && fotos.length < total && <Button updatePage={this.updatePage} />}
        </WrapperStyled>
        <GlobalStyle />
      </>
    );
  }
}
