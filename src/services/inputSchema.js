import * as yup from 'yup';

export const inputSchema = yup.object().shape({
  searchInput: yup.mixed().required('Обов`язкове поле'),
});
