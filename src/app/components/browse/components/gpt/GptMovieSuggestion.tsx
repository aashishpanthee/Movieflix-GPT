import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import MovieList from '../MovieList';

type Props = {};

const GptMovieSuggestion = (props: Props) => {
  const { movieNames, movieResults } = useSelector(
    (store: RootState) => store.gpt
  );
  if (!movieNames || !movieResults) return null;
  return (
    <div className='p-4 m-4 text-white bg-opacity-90 md:text-lg lg:text-xl'>
      <p className='px-3 py-2 bg-red-300 rounded-md text-slate-100 w-fit'>
        ISSUE: Open-ai's, gpt api is not working due to excessive api calls and
        free quotas for the api call has been finished
      </p>
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
