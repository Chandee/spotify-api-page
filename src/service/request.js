import axios from 'axios';

export const requestAxios = (url, config) => {
  const customAxios = axios.create({
    baseURL: process.env.API,
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('auth_token'),
    },
  });

  customAxios.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 401) {
        sessionStorage.removeItem('auth_token');
        window.location = '/login';
      }
      return err;
    }
  );

  return customAxios[config.method](url, config.data);
};
