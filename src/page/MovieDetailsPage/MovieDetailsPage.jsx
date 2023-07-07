import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useRef } from 'react';
import { FcLeft } from 'react-icons/fc';

import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { useFetch } from 'hook/useFetch';
import { getMovieDetalis } from 'services/api/movieApi';

import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';
import { MovieDetalisAdditionalInfo } from 'components/MovieDetalisAdditionalInfo/MovieDetalisAdditionalInfo';
import { LinkGoBack } from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location?.state?.from ?? '/');

  const [movie, error, loading] = useFetch(getMovieDetalis, movieId);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }
  return (
    <div>
      <LinkGoBack to={backLinkLocationRef.current}>
        <FcLeft />
        Go back
      </LinkGoBack>

      <MovieDetailsItem {...movie} />
      <MovieDetalisAdditionalInfo />

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
