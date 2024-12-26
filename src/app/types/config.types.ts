export type ConfigType = {
  firebasConfig: FirebaseConfigType;
  tmdbApiConfig: TmdbApiConfigType;
  openAiApiConfig: OpenAiApiConfigType;
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
export type OpenAiApiConfigType = {
  apiKey: string;
};
