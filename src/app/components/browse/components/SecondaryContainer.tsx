import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

type Props = {};

const SecondaryContainer = (props: Props) => {
  const { nowPlayingMovies, nowPlayingMoviesError } = useSelector(
    (store: RootState) => store.movies
  );
  const { popularMovies, popularMoviesError } = useSelector(
    (store: RootState) => store.movies
  );
  const { topRatedMovies, topRatedMoviesError } = useSelector(
    (store: RootState) => store.movies
  );
  const { upComingMovies, upComingMoviesError } = useSelector(
    (store: RootState) => store.movies
  );

  return (
    <div className='bg-black'>
      <div className='mt-0 z-20 md:-mt-[2%] lg:-mt-[10%] relative md:pl-12 pl-2'>
        <MovieList
          title='Now Playing'
          movies={nowPlayingMovies}
          error={nowPlayingMoviesError}
        />
        <MovieList
          title='Upcoming'
          movies={upComingMovies}
          error={upComingMoviesError}
        />
        <MovieList
          title='Top Rated'
          movies={topRatedMovies}
          error={topRatedMoviesError}
        />
        <MovieList
          title='Popular'
          movies={popularMovies}
          error={popularMoviesError}
        />
      </div>
    </div>
  );
};
export default SecondaryContainer;
