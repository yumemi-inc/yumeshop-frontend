import api from 'src/libs/aspida/api/$api';
import aspida from '@aspida/fetch';

export const client = api(
  aspida(fetch, {
    baseURL: process.env.NEXT_PUBLIC_API_ROOT,
  }),
);
