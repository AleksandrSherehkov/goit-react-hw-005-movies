import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, ...movieData }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem {...movieData} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};
