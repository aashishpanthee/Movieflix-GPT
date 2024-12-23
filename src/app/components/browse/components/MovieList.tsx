import { MOVIE } from '../../../types/movie.types';
import MovieCard from './MovieCard';

type MovieListProps = {
  title: string;
  movies: MOVIE[] | null;
};

const MovieList = ({ title, movies }: MovieListProps) => {
  return (
    <div className='flex flex-col px-6 py-5 text-slate-100'>
      <h1 className='pb-2 text-xl font-normal '>{title}</h1>
      <div className='flex gap-4 overflow-x-scroll'>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
