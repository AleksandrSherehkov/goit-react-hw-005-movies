import PropTypes from "prop-types";
export const ErrorIndicator = ({ error }) => <p>Error: {error}</p>;

ErrorIndicator.propTypes = {
  error: PropTypes.string.isRequired,
};
