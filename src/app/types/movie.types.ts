export type NOW_PLAYING_MOVIE = {
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

export type NOW_PLAYING_MOVIE_RESPONSE = {
  dates: DATES;
  pages: number;
  results: NOW_PLAYING_MOVIE[];
  total_pages: number;
  total_results: number;
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

export type getNowPlayingMovies = () => Promise<void>;
export type getNowPlayingMovieTrailer = () => Promise<void>;
