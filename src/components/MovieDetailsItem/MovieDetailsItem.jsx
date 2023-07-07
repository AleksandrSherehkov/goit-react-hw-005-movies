import PropTypes from 'prop-types';

import posterBg from 'services/poster1.jpg';
import {
  GanresName,
  Overview,
  Poster,
  Release,
  Title,
  Value,
  ValueVote,
  Wrapper,
  WrapperGenres,
  WrapperTitle,
  WrapperVote,
} from './MovieDetalisItem.styled';

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
    <Wrapper>
      <Poster
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : posterBg}
        alt={title}
      />
      <div>
        <WrapperTitle>
          <Title>{title}</Title>
          <Release>
            release: <Value>{release_date.split('-').reverse().join('-')}</Value>
          </Release>
        </WrapperTitle>
        <WrapperGenres>
          {genres?.map(({ name, id }) => (
            <li key={id}>
              <GanresName>{name}</GanresName>
            </li>
          ))}
        </WrapperGenres>
        <Overview>{overview}</Overview>
        <WrapperVote>
          <Release>
            Vote average: <ValueVote>{vote_average}</ValueVote>
          </Release>
          <Release>
            Vote count: <ValueVote>{vote_count}</ValueVote>
          </Release>
        </WrapperVote>
      </div>
    </Wrapper>
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
