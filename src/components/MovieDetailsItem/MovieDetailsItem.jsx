import PropTypes from 'prop-types';
import posterBg from 'services/poster1.jpg';

export const MovieDetailsItem = ({
  title,
  genres,
  overview,
  poster_path,
  release_date,
  vote_average,
  vote_count,
}) => {
  return (
    <div>
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterBg}
        alt={title}
      />
      <div>
        <div>
          <h2>{title}</h2>
          <p>release: {release_date}</p>
        </div>
        <ul>
          {genres?.map(({ name, id }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <p>{overview}</p>
        <div>
          <p>
            Vote average: <span>{vote_average}</span>
          </p>
          <p>
            Vote count: <span>{vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

MovieDetailsItem.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
};
