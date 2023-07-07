import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Link, useLocation } from 'react-router-dom';
import { Card, WraperList } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <WraperList>
      {movies.map(({ id, ...movieData }) => (
        <Card key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieItem {...movieData} />
          </Link>
        </Card>
      ))}
    </WraperList>
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
