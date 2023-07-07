import { useFetch } from 'hook/useFetch';

import { getMoviesTrending } from 'services/api/movieApi';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { MoviesList } from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [{ results }, error, loading] = useFetch(getMoviesTrending);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return (
    <>
      <h1>TRENDING TODAY</h1>
      {results && <MoviesList movies={results} />}
    </>
  );
};

export default HomePage;
