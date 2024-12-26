import axiosInstance from '../config/axios/axios.config';
import {
  SearchedMoviesFromTMDB,
  SearchedMoviesFromTMDBResponse,
} from '../types/movie.types';

export const searchMovieTMDB = async (movie: string) => {
  const response = await axiosInstance.get<SearchedMoviesFromTMDBResponse>(
    `/search/movie?query=${movie}&include_adult=false&page=1`
  );
  const searchedMovieTMDBResults: SearchedMoviesFromTMDB[] =
    response.data.results;
  return searchedMovieTMDBResults;
};
