import aspida from '@aspida/axios';
import axios from 'axios';
import api from 'api/$api';

export const apiClient = api(
  aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_BASE_URL }),
);
