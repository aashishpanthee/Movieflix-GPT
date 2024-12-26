import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

type Props = {};

const SecondaryContainer = (props: Props) => {
  const { nowPlayingMovies } = useSelector((store: RootState) => store.movies);
  const { popularMovies } = useSelector((store: RootState) => store.movies);
  const { topRatedMovies } = useSelector((store: RootState) => store.movies);
  const { upComingMovies } = useSelector((store: RootState) => store.movies);
  if (!nowPlayingMovies && !popularMovies && !topRatedMovies && !upComingMovies)
    return null;
  return (
    <div className='bg-black '>
      <div className='mt-0 z-20 md:-mt-[2%] lg:-mt-[10%] relative md:pl-12 pl-2'>
        <MovieList title='Now Playing' movies={nowPlayingMovies} />
        <MovieList title='Upcoming' movies={upComingMovies} />
        <MovieList title='Top Rated' movies={topRatedMovies} />
        <MovieList title='Popular' movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
