import axios from 'axios';

const API_KEY = '28592682-30ff71119c6d581761e4defab';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getEditorChoiceFotos = page => {
  return axios
    .get('', {
      params: {
        page,
        editors_choice: true,
      },
    })
    .then(response => response.data);
};

export const getSearchFotos = (page, query) => {
  return axios
    .get('', {
      params: {
        q: query,
        page,
      },
    })
    .then(response => response.data);
};
