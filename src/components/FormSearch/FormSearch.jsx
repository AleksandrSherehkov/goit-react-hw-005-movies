import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { useSearchParams } from 'react-router-dom';
import { ButtonSubmit, ErrorStyled, FieldStyled, FormStyled } from './FormSearch.styled';

export const FormSearch = () => {
  const [, setSearchParams] = useSearchParams();

  const initialValues = {
    searchInput: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const { searchInput } = values;
    const query = searchInput.trim();
    setSearchParams(searchInput ? { query } : {});

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.searchInput) {
          errors.searchInput = 'Please enter a search query';
        }
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <FieldStyled
          type="text"
          name="searchInput"
          placeholder="Search images and photos"
          autoFocus
        />
        <ButtonSubmit type="submit">
          <FcSearch />
        </ButtonSubmit>
        <ErrorStyled name="searchInput" component="div" className="error" />
      </FormStyled>
    </Formik>
  );
};
