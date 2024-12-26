export type MOVIE = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type DATES = {
  maximum: string;
  minimum: string;
};

export type NOW_PLAYING_MOVIE_TRAILER = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

export type NOW_PLAYING_MOVIE_RESPONSE = {
  dates: DATES;
  page: number;
  results: MOVIE[];
  total_pages: number;
  total_results: number;
};

export type POPULAR_MOVIE_RESPONSE = {
  page: number;
  results: MOVIE[];
  total_pages: number;
  total_results: number;
};

export type TOP_RATED_MOVIE_RESPONSE = {
  page: number;
  results: MOVIE[];
  total_pages: number;
  total_results: number;
};

export type UPCOMING_MOVIE_RESPONSE = {
  dates: DATES;
  page: number;
  results: MOVIE[];
  total_pages: number;
  total_results: number;
};

export type SearchedMoviesFromTMDBResponse = {
  page: number;
  results: SearchedMoviesFromTMDB[];
  total_pages: number;
  total_results: number;
};

export type SearchedMoviesFromTMDB = {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type getNowPlayingMovies = () => Promise<MOVIE[]>;
export type getNowPlayingMovieTrailer =
  () => Promise<NOW_PLAYING_MOVIE_TRAILER>;
export type getPopularMovies = () => Promise<MOVIE[]>;
export type getTopRatedMovies = () => Promise<MOVIE[]>;
export type getUpcomingMovies = () => Promise<MOVIE[]>;
