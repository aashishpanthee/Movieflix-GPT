import axios, { AxiosInstance } from 'axios';
import { CONFIG } from '../index.config';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: CONFIG.tmdbApiConfig.headers,
});

export default axiosInstance;
