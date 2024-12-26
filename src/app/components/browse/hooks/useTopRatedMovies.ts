import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  addtopRatedMovies,
  clearErrorOfMovies,
  errorStateOfTopRatedMovies,
} from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getTopRatedMovies,
  MOVIE,
  TOP_RATED_MOVIE_RESPONSE,
} from '../../../types/movie.types';
import { useQuery } from '@tanstack/react-query';

export const useTopRatedMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getTopRatedMovies: getTopRatedMovies = async () => {
    const response = await axiosInstance.get<TOP_RATED_MOVIE_RESPONSE>(
      '/movie/top_rated?page=1'
    );
    const topRatedMoviesResponse: TOP_RATED_MOVIE_RESPONSE = response.data;
    const topRatedMovies: MOVIE[] = topRatedMoviesResponse.results;
    return topRatedMovies;
  };

  const { data, error } = useQuery({
    queryKey: ['top-rated-movies'],
    queryFn: getTopRatedMovies,
    staleTime: 1000 * 60 * 3, // Data is considered fresh for 3 minutes
  });

  useEffect(() => {
    if (data) {
      dispatch(addtopRatedMovies(data));
      dispatch(clearErrorOfMovies());
    }
    if (error) {
      dispatch(errorStateOfTopRatedMovies(error?.message));
    }
  }, [data, error]);
};

export default useTopRatedMovies;
