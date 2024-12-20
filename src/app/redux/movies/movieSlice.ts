import { createSlice } from '@reduxjs/toolkit';
import { NOW_PLAYING_MOVIE } from '../../types/movie.types';

type movieInitialnitialState = {
  nowPlayingMovies: NOW_PLAYING_MOVIE[] | null;
};

let initialState: movieInitialnitialState = {
  nowPlayingMovies: null,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});
export const { addNowPlayingMovie } = movieSlice.actions;
export default movieSlice.reducer;
