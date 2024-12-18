import { createSlice } from '@reduxjs/toolkit';

type authInitialState = {
  user: null | {
    uid: string;
    email: string;
    displayName: string;
  };
};
let initialState: authInitialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return { ...state, user: action.payload };
    },
    removeUser: (state) => {
      return { ...state, user: null };
    },
  },
});
export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
