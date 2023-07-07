import { useFetch } from 'hook/useFetch';

import { getMoviesTrending } from 'services/api/movieApi';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section, TitleHomePage } from './HomePage.styled';

const HomePage = () => {
  const [{ results }, error, loading] = useFetch(getMoviesTrending);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return (
    <Section>
      <TitleHomePage>TRENDING TODAY</TitleHomePage>

      {results && <MoviesList movies={results} />}
    </Section>
  );
};

export default HomePage;
