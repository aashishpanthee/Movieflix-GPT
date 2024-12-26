import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import {
  addPopularMovies,
  addUpComingMovies,
} from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getUpcomingMovies,
  MOVIE,
  UPCOMING_MOVIE_RESPONSE,
} from '../../../types/movie.types';

export const useUpcomingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getUpcomingMovies();
  }, []);

  const { upComingMovies } = useSelector((store: RootState) => store.movies);

  const getUpcomingMovies: getUpcomingMovies = async () => {
    const response = await axiosInstance.get<UPCOMING_MOVIE_RESPONSE>(
      '/movie/upcoming?page=1'
    );
    const upComingMoviesResponse: UPCOMING_MOVIE_RESPONSE = response.data;
    const upComingMovies: MOVIE[] = upComingMoviesResponse.results;
    dispatch(addUpComingMovies(upComingMovies));
  };

  return upComingMovies;
};
export default useUpcomingMovies;
