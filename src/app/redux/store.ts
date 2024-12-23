import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import movieReducer from './movies/movieSlice';
import gptReducer from './gpt/gptSlice';
import configReducer from './config/configSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
    auth: authReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
