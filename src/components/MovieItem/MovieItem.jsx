import PropTypes from 'prop-types';
import posterBg from 'services/poster1.jpg';

export const MovieItem = ({ title, poster_path, vote_average, vote_count }) => {
  return (
    <>
      <p>{title ? title : 'Movie without a title'}</p>
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterBg}
        alt={title}
      />
      <div>
        <p>
          Vote average: <span>{vote_average}</span>
        </p>
        <p>
          Vote count:<span> {vote_count}</span>
        </p>
      </div>
    </>
  );
};

MovieItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
};
