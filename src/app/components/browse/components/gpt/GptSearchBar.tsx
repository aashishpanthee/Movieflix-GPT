import { useDispatch, useSelector } from 'react-redux';
import { GPT_SEARCH_BAR_TEXT } from '../../../../utils/constants';
import { AppDispatch, RootState } from '../../../../redux/store';
import Button from '../../../common/Button';
import { useRef } from 'react';
import axiosInstance from '../../../../config/axios/axios.config';
import {
  SearchedMoviesFromTMDB,
  SearchedMoviesFromTMDBResponse,
} from '../../../../types/movie.types';
import { addGptMovieResult } from '../../../../redux/gpt/gptSlice';

type Props = {};

const GptSearchBar = (props: Props) => {
  const { selectedLanguage } = useSelector((store: RootState) => store.config);
  const searchText = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const searchMovieTMDB = async (movie: string) => {
    const response = await axiosInstance.get<SearchedMoviesFromTMDBResponse>(
      `/search/movie?query=${movie}&include_adult=false&page=1`
    );
    const searchedMovieTMDBResults: SearchedMoviesFromTMDB[] =
      response.data.results;
    return searchedMovieTMDBResults;
  };
  searchMovieTMDB('GodFather');

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
      'Godfather',
      'The Godfather',
      'The Godfather Part II',
      'JAZZ GODFATHER',
      'Tokyo Godfathers',
      'Miracles: The Canton Godfather',
    ];

    const PromiseArrayofSearchedMovies = mockGPTRecommendations.map(
      (movie: string) => searchMovieTMDB(movie)
    );

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
    <div className='pt-[10%] flex justify-center'>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='grid w-1/2 grid-cols-12 bg-black'
      >
        <input
          type='text'
          className='col-span-9 p-4 m-4'
          placeholder={GPT_SEARCH_BAR_TEXT[selectedLanguage].searchPlaceholder}
          ref={searchText}
        />
        <Button
          className='col-span-3 px-4 py-2 m-4 text-white bg-red-700 rounded-md'
          onClick={handleGPTSearchClick}
        >
          {GPT_SEARCH_BAR_TEXT[selectedLanguage].search}
        </Button>
      </form>
    </div>
  );
};
export default GptSearchBar;
