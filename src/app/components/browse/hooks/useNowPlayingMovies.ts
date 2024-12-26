import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import {
  addNowPlayingMovie,
  clearErrorOfMovies,
  errorStateOfNowPlayingMovies,
} from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getNowPlayingMovies,
  MOVIE,
  NOW_PLAYING_MOVIE_RESPONSE,
} from '../../../types/movie.types';
import { useQuery } from '@tanstack/react-query';

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getNowPlayingMovies: getNowPlayingMovies = async () => {
    const response = await axiosInstance.get<NOW_PLAYING_MOVIE_RESPONSE>(
      '/movie/now_playing?page=1'
    );
    const nowPlayingMoviesResponse: NOW_PLAYING_MOVIE_RESPONSE = response.data;
    const nowPlayingMovies: MOVIE[] = nowPlayingMoviesResponse.results;
    return nowPlayingMovies;
  };

  const { data, error } = useQuery({
    queryKey: ['now-playing-movies'],
    queryFn: getNowPlayingMovies,
    staleTime: 1000 * 60 * 3, // Data is considered fresh for 3 minutes
  });

  useEffect(() => {
    if (data) {
      dispatch(addNowPlayingMovie(data));
      dispatch(clearErrorOfMovies());
    } else {
      dispatch(errorStateOfNowPlayingMovies(error?.message));
    }
  }, [data, error]);
};
export default useNowPlayingMovies;
