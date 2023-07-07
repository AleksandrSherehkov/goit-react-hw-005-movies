import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmFiYmU1ZjIwY2M1NzY1OWFlZmQ2YWJiMGIwNDM1MiIsInN1YiI6IjYyZjhiNzY4MTc1MDUxMDA3YzU5MTljNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FDju8o-WaDFdXAGbqe5q7ZrROZlM66APc98wsk67sOg';

export const configureRequest = config => {
  axios.defaults.baseURL = API_BASE_URL;
  axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;

  axios.defaults.params = {
    language: 'en-US',
    ...config,
  };
};
