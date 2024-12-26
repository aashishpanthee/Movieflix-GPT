import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { addNowPlayingMovie } from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getNowPlayingMovies,
  MOVIE,
  NOW_PLAYING_MOVIE_RESPONSE,
} from '../../../types/movie.types';

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { nowPlayingMovies } = useSelector((store: RootState) => store.movies);

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies: getNowPlayingMovies = async () => {
    const response = await axiosInstance.get<NOW_PLAYING_MOVIE_RESPONSE>(
      '/movie/now_playing?page=1'
    );
    const nowPlayingMoviesResponse: NOW_PLAYING_MOVIE_RESPONSE = response.data;
    const nowPlayingMovies: MOVIE[] = nowPlayingMoviesResponse.results;
    dispatch(addNowPlayingMovie(nowPlayingMovies));
  };
  return nowPlayingMovies;
};
export default useNowPlayingMovies;
