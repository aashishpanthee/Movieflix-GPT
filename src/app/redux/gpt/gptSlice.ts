import { createSlice } from '@reduxjs/toolkit';
import { SearchedMoviesFromTMDB } from '../../types/movie.types';

type gptInitialState = {
  showGptSearch: boolean;
  movieResults: SearchedMoviesFromTMDB[][] | null;
  movieNames: string[] | null;
};

let initialState: gptInitialState = {
  showGptSearch: false,
  movieResults: null,
  movieNames: null,
};

export const gptSlice = createSlice({
  name: 'gpt',
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
