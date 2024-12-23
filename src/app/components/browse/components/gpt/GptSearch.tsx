import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { LOGIN_BG } from '../../../../utils/constants';

type Props = {};

const GptSearch = (props: Props) => {
  return (
    <div className=''>
      <div className='absolute w-full -z-10'>
        <img
          src={LOGIN_BG}
          alt='logo'
          className='object-cover w-full h-screen'
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
