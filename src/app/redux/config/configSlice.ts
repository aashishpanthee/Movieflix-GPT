import { createSlice } from '@reduxjs/toolkit';

type getSelectedLanguage = {
  selectedLanguage: string;
};
let initialState: getSelectedLanguage = {
  selectedLanguage: 'en',
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer;
