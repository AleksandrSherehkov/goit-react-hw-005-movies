import React from 'react';
import { ButtonLoadeMoreStyled } from './Button.styled';

export const Button = ({ updatePage }) => {
  return (
    <ButtonLoadeMoreStyled type="button" onClick={updatePage}>
      Load more
    </ButtonLoadeMoreStyled>
  );
};
