import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { useEffect } from 'react';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getNowPlayingMovieTrailer,
  NOW_PLAYING_MOVIE_TRAILER,
} from '../../../types/movie.types';
import { addNowPlayingMovieTrailer } from '../../../redux/movies/movieSlice';

export const useNowPlayingMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch<AppDispatch>();

  const { nowPlayingMovieTrailer } = useSelector(
    (store: RootState) => store.movies
  );

  useEffect(() => {
    getNowPlayingMovieTrailer();
  }, [movieId]);

  const getNowPlayingMovieTrailer: getNowPlayingMovieTrailer = async () => {
    const nowPlayingMovieDetail = await axiosInstance.get(
      `/movie/${movieId}/videos?language=en-US`
    );
    const nowPlayingMovieDetailResult: NOW_PLAYING_MOVIE_TRAILER[] =
      nowPlayingMovieDetail.data.results;

    const nowPlayingMovieTrailerResults: NOW_PLAYING_MOVIE_TRAILER[] =
      nowPlayingMovieDetailResult.filter((video: any) =>
        video.type.includes('Trailer')
      );
    const nowPlayingMovieTrailer: NOW_PLAYING_MOVIE_TRAILER =
      nowPlayingMovieTrailerResults.length
        ? nowPlayingMovieTrailerResults[0]
        : nowPlayingMovieDetail.data.results[0];
    dispatch(addNowPlayingMovieTrailer(nowPlayingMovieTrailer));
  };
  return nowPlayingMovieTrailer;
};
