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
