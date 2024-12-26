import { useSelector } from 'react-redux';
import { useNowPlayingMovieTrailer } from '../hooks/useNowPlayingMovieTrailer';
import { RootState } from '../../../redux/store';

type VideoBackgroundProps = {
  movieId: number;
};

const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  useNowPlayingMovieTrailer(movieId);
  const { nowPlayingMovieTrailer } = useSelector(
    (store: RootState) => store.movies
  );
  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${nowPlayingMovieTrailer?.key}?&autoplay=1&mute=1`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
      ></iframe>
    </div>
  );
};
export default VideoBackground;
