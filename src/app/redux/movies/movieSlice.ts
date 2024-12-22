import { createSlice } from '@reduxjs/toolkit';
import {
  NOW_PLAYING_MOVIE,
  NOW_PLAYING_MOVIE_TRAILER,
} from '../../types/movie.types';

type movieInitialnitialState = {
  nowPlayingMovies: NOW_PLAYING_MOVIE[] | null;
  nowPlayingMovieTrailer: NOW_PLAYING_MOVIE_TRAILER | null;
};

let initialState: movieInitialnitialState = {
  nowPlayingMovies: null,
  nowPlayingMovieTrailer: null,
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
  },
});
export const { addNowPlayingMovie, addNowPlayingMovieTrailer } =
  movieSlice.actions;
export default movieSlice.reducer;
