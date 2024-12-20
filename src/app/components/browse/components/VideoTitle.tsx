type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
