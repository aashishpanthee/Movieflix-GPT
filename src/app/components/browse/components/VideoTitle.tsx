import Button from '../../common/Button';

type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className='absolute w-screen md:px-24 px-6 text-slate-100 pt-[20%] bg-gradient-to-r from-black aspect-video'>
      <h1 className='text-2xl font-bold md:text-6xl'>{title}</h1>
      <p className='hidden py-6 text-lg text-justify lg:w-1/3 md:w-1/2 lg:inline-block'>
        {overview}
      </p>
      <div>
        <Button className='px-5 py-2 text-base bg-gray-400 rounded-md md:text-black md:bg-gray-100 lg:text-xl lg:px-12 md:py-4 hover:bg-opacity-80'>
          ▶️ Play
        </Button>
        <Button className='hidden mx-2 text-xl bg-gray-500 bg-opacity-50 rounded-md lg:px-12 lg:py-4 lg:inline-block'>
          More Info
        </Button>
      </div>
    </div>
  );
};

export default VideoTitle;
