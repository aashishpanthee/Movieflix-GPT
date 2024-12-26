import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { addtopRatedMovies } from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getTopRatedMovies,
  MOVIE,
  TOP_RATED_MOVIE_RESPONSE,
} from '../../../types/movie.types';

export const useTopRatedMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  const { topRatedMovies } = useSelector((store: RootState) => store.movies);

  const getTopRatedMovies: getTopRatedMovies = async () => {
    const response = await axiosInstance.get<TOP_RATED_MOVIE_RESPONSE>(
      '/movie/top_rated?page=1'
    );
    const topRatedMoviesResponse: TOP_RATED_MOVIE_RESPONSE = response.data;
    const topRatedMovies: MOVIE[] = topRatedMoviesResponse.results;
    dispatch(addtopRatedMovies(topRatedMovies));
  };

  return topRatedMovies;
};
export default useTopRatedMovies;
