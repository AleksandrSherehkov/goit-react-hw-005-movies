import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { useFetch } from 'hook/useFetch';
import React from 'react';

import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api/movieApi';
import { Avtor, Card, Contetnt, NoContetnt, WraperList } from './Reviews.styled';

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
    <WraperList>
      {results && results.length > 0 ? (
        results.map(({ id, author, content }) => (
          <Card key={id}>
            <Avtor>{author}</Avtor>
            <Contetnt>{content}</Contetnt>
          </Card>
        ))
      ) : (
        <NoContetnt>We don't have any reviews for this movie.</NoContetnt>
      )}
    </WraperList>
  );
};
