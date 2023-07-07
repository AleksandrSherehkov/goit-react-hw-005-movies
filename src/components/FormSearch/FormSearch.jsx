import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';

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
      <Form autoComplete="off">
        <button type="submit">
          <span>Search</span>
        </button>
        <Field type="text" name="searchInput" placeholder="Search images and photos" autoFocus />
        <ErrorMessage name="searchInput" component="div" className="error" />
      </Form>
    </Formik>
  );
};
