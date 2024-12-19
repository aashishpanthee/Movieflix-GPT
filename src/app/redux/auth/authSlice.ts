import { createSlice } from '@reduxjs/toolkit';
import { AuthUser } from '../../types/auth.types';

type authInitialState = {
  user: AuthUser | null;
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
