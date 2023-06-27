import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { ImageGalleryStyled } from './ImageGallery.styled';
import { getEditorChoiceFotos, getSearchFotos } from 'services/fotosApi';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    fotos: [],
    total: 0,
    page: 1,
    query: '',
    isLoading: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.query !== prevState.query) {
      return {
        page: 1,
        query: nextProps.query,
      };
    }
    return null;
  }

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

  setEditorChoiceFoto = () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    getEditorChoiceFotos(page)
      .then(({ hits, total }) =>
        this.setState(prevState => ({
          fotos: [...prevState.fotos, ...hits],
          total,
        }))
      )
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  setSearchFotos = () => {
    const { page, query } = this.state;
    this.setState({ isLoading: true });
    getSearchFotos(page, query)
      .then(({ hits, total }) =>
        this.setState(prevState => ({
          fotos: page === 1 ? hits : [...prevState.fotos, ...hits],
          total,
        }))
      )
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  updatePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { fotos, total, isLoading } = this.state;

    return (
      <>
        <ImageGalleryStyled>
          {fotos.map(item => (
            <ImageGalleryItem key={item.id} {...item} />
          ))}
        </ImageGalleryStyled>
        {isLoading && <Loader />}
        {fotos.length > 0 && fotos.length < total && <Button updatePage={this.updatePage} />}
      </>
    );
  }
}
