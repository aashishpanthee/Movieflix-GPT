import Header from '../common/Header';
import MainContainer from './components/MainContainer';
import SecondaryContainer from './components/SecondaryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';

type Props = {};

const Browse = (props: Props) => {
  const nowPlayingMovies = useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
