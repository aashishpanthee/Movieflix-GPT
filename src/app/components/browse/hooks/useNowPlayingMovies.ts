import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { addNowPlayingMovie } from '../../../redux/movies/movieSlice';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getNowPlayingMovies,
  NOW_PLAYING_MOVIE_RESPONSE,
} from '../../../types/movie.types';

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const { nowPlayingMovies } = useSelector((store: RootState) => store.movies);

  const getNowPlayingMovies: getNowPlayingMovies = async () => {
    const nowPlayingMoviesResponse =
      await axiosInstance.get<NOW_PLAYING_MOVIE_RESPONSE>(
        '/now_playing?page=1'
      );
    dispatch(addNowPlayingMovie(nowPlayingMoviesResponse.data.results));
  };

  if (!nowPlayingMovies) {
    return null;
  }

  return nowPlayingMovies;
};
export default useNowPlayingMovies;
