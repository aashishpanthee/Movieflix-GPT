export type ConfigType = {
  firebasConfig: FirebaseConfigType;
  tmdbApiConfig: TmdbApiConfigType;
};
export type FirebaseConfigType = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
};
export type TmdbApiConfigType = {
  headers: HeaderType;
};
export type HeaderType = {
  accept: string;
  Authorization: string;
};
