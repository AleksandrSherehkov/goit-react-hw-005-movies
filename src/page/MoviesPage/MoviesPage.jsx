import { useSearchParams } from 'react-router-dom';

import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { FormSearch } from 'components/FormSearch/FormSearch';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useFetch } from 'hook/useFetch';
import { getMoviesByQuery } from 'services/api/movieApi';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const [{ results }, error, loading] = useFetch(getMoviesByQuery, query);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return (
    <>
      <FormSearch />
      {results && <MoviesList movies={results} />}
    </>
  );
};

export default MoviesPage;
