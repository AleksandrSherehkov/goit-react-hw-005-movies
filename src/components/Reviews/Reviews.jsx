import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { useFetch } from 'hook/useFetch';
import React from 'react';

import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api/movieApi';

export const Reviews = () => {
  const { movieId } = useParams();

  const [{ results }, error, loading] = useFetch(getMovieReviews, movieId);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }
  return (
    <ul>
      {results && results.length > 0 ? (
        results.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};
