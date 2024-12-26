import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useEffect } from 'react';
import axiosInstance from '../../../config/axios/axios.config';
import {
  getNowPlayingMovieTrailer,
  NOW_PLAYING_MOVIE_TRAILER,
} from '../../../types/movie.types';
import {
  addNowPlayingMovieTrailer,
  clearErrorOfMovies,
  nowPlayingMovieTrailerError,
} from '../../../redux/movies/movieSlice';
import { useQuery } from '@tanstack/react-query';

export const useNowPlayingMovieTrailer = (movieId: number) => {
  const dispatch = useDispatch<AppDispatch>();

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
    return nowPlayingMovieTrailer;
  };

  const { data, error } = useQuery({
    queryKey: ['now-playing-movie-trailer', movieId],
    queryFn: getNowPlayingMovieTrailer,
    staleTime: 1000 * 60 * 3, // Data is considered fresh for 3 minutes
  });

  useEffect(() => {
    if (data) {
      dispatch(addNowPlayingMovieTrailer(data));
      dispatch(clearErrorOfMovies());
    } else {
      dispatch(nowPlayingMovieTrailerError(error?.message));
    }
  }, [movieId, data, error]);
};
