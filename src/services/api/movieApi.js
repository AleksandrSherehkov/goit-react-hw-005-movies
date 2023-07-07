import axios from 'axios';
import { configureRequest } from './configureRequest';
import { performRequest } from './performRequest';

export const getMoviesTrending = async () => {
  configureRequest();
  return performRequest(axios.get, '/trending/movie/week');
};

export const getMovieDetalis = async id => {
  configureRequest();
  return performRequest(axios.get, `/movie/${id}`);
};

export const getMoviesByQuery = async query => {
  configureRequest();
  return performRequest(axios.get, `/search/movie?query=${query}`);
};

export const getMovieCast = async id => {
  configureRequest();
  return performRequest(axios.get, `/movie/${id}/credits`);
};

export const getMovieReviews = async id => {
  configureRequest();
  return performRequest(axios.get, `/movie/${id}/reviews`);
};
