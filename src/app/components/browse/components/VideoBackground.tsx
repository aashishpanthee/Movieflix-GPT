import { useNowPlayingMovieTrailer } from '../hooks/useNowPlayingMovieTrailer';

type VideoBackgroundProps = {
  movieId: number;
};

const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  const nowPlayingMovieTrailer = useNowPlayingMovieTrailer(movieId);

  if (!nowPlayingMovieTrailer) return <div>Loading Movie trailer.....</div>;
  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${nowPlayingMovieTrailer.key}?&autoplay=1&mute=1`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
      ></iframe>
    </div>
  );
};

export default VideoBackground;
