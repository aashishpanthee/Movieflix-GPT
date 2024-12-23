import { useSelector } from 'react-redux';
import { GPT_SEARCH_BAR_TEXT } from '../../../../utils/constants';
import { RootState } from '../../../../redux/store';

type Props = {};

const GptSearchBar = (props: Props) => {
  const { selectedLanguage } = useSelector((store: RootState) => store.config);
  return (
    <div className='pt-[10%] flex justify-center'>
      <form action='' className='grid w-1/2 grid-cols-12 bg-black'>
        <input
          type='text'
          className='col-span-9 p-4 m-4'
          placeholder={GPT_SEARCH_BAR_TEXT[selectedLanguage].searchPlaceholder}
        />
        <button className='col-span-3 px-4 py-2 m-4 text-white bg-red-700 rounded-md'>
          {GPT_SEARCH_BAR_TEXT[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
