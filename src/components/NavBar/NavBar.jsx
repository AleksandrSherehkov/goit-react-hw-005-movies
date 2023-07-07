import React from 'react';
import { CustomLink, HeaderWrapper, NavigationList } from './NavBar.styled';

export const NavBar = () => {
  return (
    <HeaderWrapper>
      <NavigationList>
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/movies">Movies</CustomLink>
        </li>
      </NavigationList>
    </HeaderWrapper>
  );
};
