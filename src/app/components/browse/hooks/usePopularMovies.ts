import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  addPopularMovies,
  clearErrorOfMovies,
  errorStateOfPopularMovies,
} from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getPopularMovies,
  MOVIE,
  POPULAR_MOVIE_RESPONSE,
} from '../../../types/movie.types';
import { useQuery } from '@tanstack/react-query';

export const usePopularMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getPopularMovies: getPopularMovies = async () => {
    const response = await axiosInstance.get<POPULAR_MOVIE_RESPONSE>(
      '/movie/popular?page=1'
    );
    const popularMoviesResponse: POPULAR_MOVIE_RESPONSE = response.data;
    const popularMovies: MOVIE[] = popularMoviesResponse.results;
    return popularMovies;
  };

  const { data, error } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: getPopularMovies,
    staleTime: 1000 * 60 * 3, // Data is considered fresh for 3 minutes
  });

  useEffect(() => {
    if (data) {
      dispatch(addPopularMovies(data));
      dispatch(clearErrorOfMovies());
    }
    if (error) {
      dispatch(errorStateOfPopularMovies(error?.message));
      console.log(error);
    }
  }, [data, error]);
};
export default usePopularMovies;
