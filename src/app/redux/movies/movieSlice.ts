import { createSlice } from '@reduxjs/toolkit';
import { MOVIE, NOW_PLAYING_MOVIE_TRAILER } from '../../types/movie.types';

type movieInitialnitialState = {
  nowPlayingMovies: MOVIE[] | null;
  nowPlayingMovieTrailer: NOW_PLAYING_MOVIE_TRAILER | null;
  popularMovies: MOVIE[] | null;
  topRatedMovies: MOVIE[] | null;
  upComingMovies: MOVIE[] | null;
};

let initialState: movieInitialnitialState = {
  nowPlayingMovies: null,
  nowPlayingMovieTrailer: null,
  popularMovies: null,
  topRatedMovies: null,
  upComingMovies: null,
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
  },
});
export const {
  addNowPlayingMovie,
  addNowPlayingMovieTrailer,
  addPopularMovies,
  addtopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
