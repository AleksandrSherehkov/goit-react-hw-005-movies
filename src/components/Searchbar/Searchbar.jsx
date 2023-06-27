import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { inputSchema } from 'services/inputSchema';
import {
  SearchFormButtonLabelStyled,
  SearchFormButtonStyled,
  SearchFormInputStyled,
  SearchFormStyled,
  SearchbarStyled,
} from './Searchbar.styled';
import { ErrorSearch } from 'components/ErroSearch/ErroSearch';

export const Searchbar = ({ updateSearchQuery }) => {
  const initialValues = {
    searchInput: '',
  };

  const hendleSubmit = (values, { resetForm }) => {
    const { searchInput } = values;
    updateSearchQuery(searchInput.trim());

    resetForm();
  };

  return (
    <SearchbarStyled>
      <Formik initialValues={initialValues} validationSchema={inputSchema} onSubmit={hendleSubmit}>
        <SearchFormStyled autoComplete="off">
          <SearchFormButtonStyled type="submit">
            <SearchFormButtonLabelStyled>Search</SearchFormButtonLabelStyled>
          </SearchFormButtonStyled>
          <SearchFormInputStyled
            type="text"
            name="searchInput"
            placeholder="Search images and photos"
            autoFocus
          />
          <ErrorSearch name="searchInput" component="p" />
        </SearchFormStyled>
      </Formik>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  updateSearchQuery: PropTypes.func.isRequired,
};
