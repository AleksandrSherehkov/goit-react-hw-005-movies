import * as yup from 'yup';

export const inputSchema = yup.object({
  searchInput: yup.mixed().required('Обов`язкове поле'),
});
