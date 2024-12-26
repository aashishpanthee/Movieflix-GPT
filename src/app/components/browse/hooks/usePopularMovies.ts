import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { addPopularMovies } from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getPopularMovies,
  MOVIE,
  POPULAR_MOVIE_RESPONSE,
} from '../../../types/movie.types';

export const usePopularMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { popularMovies } = useSelector((store: RootState) => store.movies);

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies: getPopularMovies = async () => {
    const response = await axiosInstance.get<POPULAR_MOVIE_RESPONSE>(
      '/movie/popular?page=1'
    );
    const popularMoviesResponse: POPULAR_MOVIE_RESPONSE = response.data;
    const popularMovies: MOVIE[] = popularMoviesResponse.results;
    dispatch(addPopularMovies(popularMovies));
  };

  return popularMovies;
};
export default usePopularMovies;
