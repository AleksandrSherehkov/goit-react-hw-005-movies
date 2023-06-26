import React, { Component } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Searchbar } from '../Searchbar/Searchbar';
import { GlobalStyle } from 'services/styles/GlobalStyle';
import { WrapperStyled } from './App.styled';

export class App extends Component {
  state = {
    query: '',
  };

  updateSearchQuery = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <WrapperStyled>
        <Searchbar updateSearchQuery={this.updateSearchQuery} />
        <ImageGallery query={query} />
        <GlobalStyle />
      </WrapperStyled>
    );
  }
}
