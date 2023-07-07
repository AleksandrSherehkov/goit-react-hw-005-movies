import PropTypes from 'prop-types';
import posterBg from 'services/poster1.jpg';
import { Poster, Title, Value, VoteWrapper } from './MovieItem.styled';

export const MovieItem = ({ title, poster_path, vote_average, vote_count }) => {
  return (
    <>
      <Title>{title ? title : 'Movie without a title'}</Title>
      <Poster
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterBg}
        alt={title}
      />
      <VoteWrapper>
        <p>
          Vote average: <Value>{vote_average.toFixed(1)}</Value>
        </p>
        <p>
          Vote count:<Value> {vote_count}</Value>
        </p>
      </VoteWrapper>
    </>
  );
};

MovieItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
};
