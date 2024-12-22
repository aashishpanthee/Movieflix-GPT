import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

type Props = {};

const MainContainer = (props: Props) => {
  const { nowPlayingMovies } = useSelector((store: RootState) => store.movies);
  if (!nowPlayingMovies) return null;
  const mainMovie = nowPlayingMovies[2];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
