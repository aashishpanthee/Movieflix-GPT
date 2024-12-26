import { createSlice } from '@reduxjs/toolkit';
import { MOVIE, NOW_PLAYING_MOVIE_TRAILER } from '../../types/movie.types';

type movieInitialnitialState = {
  nowPlayingMovies: MOVIE[] | null;
  nowPlayingMovieTrailer: NOW_PLAYING_MOVIE_TRAILER | null;
  popularMovies: MOVIE[] | null;
  topRatedMovies: MOVIE[] | null;
  upComingMovies: MOVIE[] | null;
  nowPlayingMoviesError: string | undefined;
  popularMoviesError: string | undefined;
  topRatedMoviesError: string | undefined;
  upComingMoviesError: string | undefined;
  nowPlayingMovieTrailerError: string | undefined;
};

let initialState: movieInitialnitialState = {
  nowPlayingMovies: null,
  nowPlayingMovieTrailer: null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
  nowPlayingMoviesError: undefined,
  popularMoviesError: undefined,
  topRatedMoviesError: undefined,
  upComingMoviesError: undefined,
  nowPlayingMovieTrailerError: undefined,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingMovieTrailer: (state, action) => {
      state.nowPlayingMovieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },

    // Separate error reducers for each data type
    errorStateOfNowPlayingMovies: (state, action) => {
      state.nowPlayingMoviesError = action.payload;
    },
    errorStateOfPopularMovies: (state, action) => {
      state.popularMoviesError = action.payload;
    },
    errorStateOfTopRatedMovies: (state, action) => {
      state.topRatedMoviesError = action.payload;
    },
    errorStateOfUpComingMovies: (state, action) => {
      state.upComingMoviesError = action.payload;
    },
    nowPlayingMovieTrailerError: (state, action) => {
      state.nowPlayingMovieTrailerError = action.payload;
    },
    clearErrorOfMovies: (state) => {
      state.nowPlayingMoviesError = undefined;
      state.popularMoviesError = undefined;
      state.topRatedMoviesError = undefined;
      state.upComingMoviesError = undefined;
      state.nowPlayingMovieTrailerError = undefined;
    },
  },
});
export const {
  addNowPlayingMovie,
  addNowPlayingMovieTrailer,
  addPopularMovies,
  addtopRatedMovies,
  addUpComingMovies,
  errorStateOfNowPlayingMovies,
  errorStateOfPopularMovies,
  errorStateOfTopRatedMovies,
  errorStateOfUpComingMovies,
  nowPlayingMovieTrailerError,
  clearErrorOfMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
