import Header from '../common/Header';
import MainContainer from './components/MainContainer';
import SecondaryContainer from './components/SecondaryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import usePopularMovies from './hooks/usePopularMovies';
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useUpcomingMovies from './hooks/useUpcomingMovies';

type Props = {};

const Browse = (props: Props) => {
  const nowPlayingMovies = useNowPlayingMovies();
  const popularMovies = usePopularMovies();
  const topRatedMovies = useTopRatedMovies();
  const upComingMovies = useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
