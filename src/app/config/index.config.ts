import { ConfigType } from '../types/config.types';
export const CONFIG: ConfigType = {
  firebasConfig: {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ?? '',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ?? '',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ?? '',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ?? '',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ?? '',
    appId: process.env.REACT_APP_FIREBASE_APP_ID ?? '',
  },
  tmdbApiConfig: {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN}`,
    },
  },
  openAiApiConfig: {
    apiKey: process.env.REACT_APP_OPEN_AI_API_KEY ?? '',
  },
};
