import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

type Props = {};

const MainContainer = (props: Props) => {
  const { nowPlayingMovies } = useSelector((store: RootState) => store.movies);
  if (!nowPlayingMovies) return null;
  const mainMovie = nowPlayingMovies[0];
  return (
    <div>
      <VideoTitle
        title={mainMovie.original_title}
        overview={mainMovie.overview}
      />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
