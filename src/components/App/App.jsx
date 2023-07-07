import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';

import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const HomePage = lazy(() => import('../../page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../../page/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../page/MovieDetailsPage/MovieDetailsPage'));
const NotFound = lazy(() => import('../../page/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
