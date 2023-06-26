import { ErrorMessage, Formik } from 'formik';
import { inputSchema } from 'services/inputSchema';
import {
  SearchFormButtonLabelStyled,
  SearchFormButtonStyled,
  SearchFormInputStyled,
  SearchFormStyled,
  SearchbarStyled,
} from './Searchbar.styled';

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
          <ErrorMessage name="searchInput" component="div" />
        </SearchFormStyled>
      </Formik>
    </SearchbarStyled>
  );
};
