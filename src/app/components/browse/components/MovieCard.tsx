import { MOVIE, SearchedMoviesFromTMDB } from '../../../types/movie.types';
import { IMAGE_BASE_URL } from '../../../utils/constants';

type MovieCardProps = {
  movie: MOVIE | SearchedMoviesFromTMDB;
};

const MovieCard = (props: MovieCardProps) => {
  return (
    <div>
      <div className='md:w-52 w-44'>
        <img
          src={`${IMAGE_BASE_URL}${props.movie.poster_path}`}
          alt=''
          className=''
        />
      </div>
    </div>
  );
};

export default MovieCard;
