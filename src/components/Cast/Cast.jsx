import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { useFetch } from 'hook/useFetch';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api/movieApi';
import actor from 'services/actor.jpg';

export const Cast = () => {
  const { movieId } = useParams();

  const [{ cast }, error, loading] = useFetch(getMovieCast, movieId);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }
  return (
    <ul>
      {cast?.map(({ id, name, profile_path }) => (
        <li key={id}>
          <img
            src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : actor}
            alt={name}
          />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};
