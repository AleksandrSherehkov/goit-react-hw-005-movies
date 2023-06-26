import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { ErrorText } from './ErrorSearch.styled';

export const ErrorSearch = ({ name }) => {
  return <ErrorMessage name={name} render={message => <ErrorText>{message}</ErrorText>} />;
};

ErrorSearch.propTypes = {
  name: PropTypes.string.isRequired,
};
