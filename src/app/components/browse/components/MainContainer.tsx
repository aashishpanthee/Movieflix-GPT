import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

type Props = {};

const MainContainer = (props: Props) => {
  const { nowPlayingMovies, nowPlayingMoviesError } = useSelector(
    (store: RootState) => store.movies
  );
  if (!nowPlayingMovies) {
    return <p className='text-4xl text-green-600'>Loading...</p>;
  }
  if (nowPlayingMoviesError) {
    return (
      <div className='md:pt-0 pt-[35%] bg-black'>
        <p className='text-2xl text-center text-red-600'>
          {nowPlayingMoviesError}
        </p>
      </div>
    );
  }
  const mainMovie = nowPlayingMovies[2];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className='md:pt-0 pt-[35%] bg-black'>
      {!nowPlayingMoviesError && (
        <>
          <VideoTitle title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
