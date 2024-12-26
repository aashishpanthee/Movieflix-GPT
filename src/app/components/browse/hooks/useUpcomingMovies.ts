import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  addUpComingMovies,
  clearErrorOfMovies,
  errorStateOfUpComingMovies,
} from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getUpcomingMovies,
  MOVIE,
  UPCOMING_MOVIE_RESPONSE,
} from '../../../types/movie.types';
import { useQuery } from '@tanstack/react-query';

export const useUpcomingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getUpcomingMovies: getUpcomingMovies = async () => {
    const response = await axiosInstance.get<UPCOMING_MOVIE_RESPONSE>(
      '/movie/upcoming?page=1'
    );
    const upComingMoviesResponse: UPCOMING_MOVIE_RESPONSE = response.data;
    const upComingMovies: MOVIE[] = upComingMoviesResponse.results;
    return upComingMovies;
  };

  const { data, error } = useQuery({
    queryKey: ['upcoming-movies'],
    queryFn: getUpcomingMovies,
    staleTime: 1000 * 60 * 3, // Data is considered fresh for 3 minutes
  });

  useEffect(() => {
    if (data) {
      dispatch(addUpComingMovies(data));
      dispatch(clearErrorOfMovies());
    }
    if (error) {
      dispatch(errorStateOfUpComingMovies(error?.message));
    }
  }, [data, error]);
};
export default useUpcomingMovies;
