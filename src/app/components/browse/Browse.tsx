import { useSelector } from 'react-redux';
import Header from '../common/Header';
import GptSearch from './components/gpt/GptSearch';
import MainContainer from './components/MainContainer';
import SecondaryContainer from './components/SecondaryContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import usePopularMovies from './hooks/usePopularMovies';
import useTopRatedMovies from './hooks/useTopRatedMovies';
import useUpcomingMovies from './hooks/useUpcomingMovies';
import { RootState } from '../../redux/store';

type Props = {};

const Browse = (props: Props) => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const { showGptSearch } = useSelector((store: RootState) => store.gpt);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
