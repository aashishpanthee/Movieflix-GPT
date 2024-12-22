type VideoTitleProps = {
  title: string;
  overview: string;
};

const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className='absolute w-screen px-24 text-slate-100 pt-[20%] bg-gradient-to-r from-black aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='w-1/3 py-6 text-lg text-justify'>{overview}</p>
      <div>
        <button className='p-4 px-12 text-xl text-black bg-gray-100 rounded-md hover:bg-opacity-80'>
          ▶️ Play
        </button>
        <button className='p-4 px-12 mx-2 text-xl bg-gray-500 bg-opacity-50 rounded-md'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
