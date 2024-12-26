import { useDispatch, useSelector } from 'react-redux';
import { GPT_SEARCH_BAR_TEXT } from '../../../../utils/constants';
import { AppDispatch, RootState } from '../../../../redux/store';
import Button from '../../../common/Button';
import { useRef } from 'react';
import { addGptMovieResult } from '../../../../redux/gpt/gptSlice';
import { searchMovieTMDB } from '../../../../utils/movies';

type Props = {};

const GptSearchBar = (props: Props) => {
  const { selectedLanguage } = useSelector((store: RootState) => store.config);
  const searchText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  // ! ISSUE: Open-ai's,  gpt api is not working due to excessive api calls and free quotas for the api call has been finished. so we have used mock movies data for now.
  const handleGPTSearchClick = async () => {
    // const searchedContent = `Act as a Movie Recommendation System and suggest some movies for the query: ${searchText.current?.value} and give me name of 5 movies, comma separated like the example result given ahead. Example Result: Interstellar, Sholay, Don, Koi Mil Gaya, Agastya"`;
    // make api call to opean-ai gpt
    // const gptResults = await client.chat.completions.create({
    //   messages: [{ role: 'user', content: `${searchedContent}` }],
    //   model: 'gpt-3.5-turbo',
    // });

    // const gptRecommendedMovies =
    //   gptResults.choices?.[0].message?.content?.split(',') || [];

    const mockGPTRecommendations = [
      'The Substance',
      'Substance',
      "The Substance: Albert Hofmann's LSD",
      'Substance noire',
      'Experiments of Colour and Substance',
      'A Matéria Noturna',
    ];

    const PromiseArrayofSearchedMovies = mockGPTRecommendations.map(
      (movie: string) => searchMovieTMDB(movie)
    );

    // PromiseArrayOfSearchMovies is an array of promises, so we need to use Promise.all to wait for all promises to resolve
    const searchedMoviesFromTMDB = await Promise.all(
      PromiseArrayofSearchedMovies
    );

    dispatch(
      addGptMovieResult({
        movieNames: mockGPTRecommendations,
        movieResults: searchedMoviesFromTMDB,
      })
    );
  };

  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center px-1 md:px-0'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='grid w-full grid-cols-12 bg-black md:w-1/2 '
      >
        <input
          type='text'
          className='col-span-9 p-2 m-4 md:p-4 placeholder:text-sm md:placeholder:text-base '
          placeholder={GPT_SEARCH_BAR_TEXT[selectedLanguage].searchPlaceholder}
          ref={searchText}
        />
        <Button
          className='col-span-3 px-2 py-2 m-4 text-sm text-white bg-red-700 rounded-md md:px-4 md:text-base'
          onClick={handleGPTSearchClick}
        >
          {GPT_SEARCH_BAR_TEXT[selectedLanguage].search}
        </Button>
      </form>
    </div>
  );
};
export default GptSearchBar;
