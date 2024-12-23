import { createSlice } from '@reduxjs/toolkit';

type gptInitialState = {
  showGptSearch: boolean;
};

let initialState: gptInitialState = {
  showGptSearch: false,
};

export const gptSlice = createSlice({
  name: 'gpt',
  initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toggleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
