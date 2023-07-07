import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { ErrorIndicator } from 'components/ErrorIndicator/ErrorIndicator';
import { LoadingIndicator } from 'components/LoadingIndicator/LoadingIndicator';
import { useFetch } from 'hook/useFetch';
import { getMovieDetalis } from 'services/api/movieApi';

import { MovieDetailsItem } from 'components/MovieDetailsItem/MovieDetailsItem';
import { MovieDetalisAdditionalInfo } from 'components/MovieDetalisAdditionalInfo/MovieDetalisAdditionalInfo';
import { useRef } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

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
      <Link to={backLinkLocationRef.current}>
        <FaChevronLeft />
        Go back
      </Link>
      <MovieDetailsItem {...movie} />
      <MovieDetalisAdditionalInfo />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
