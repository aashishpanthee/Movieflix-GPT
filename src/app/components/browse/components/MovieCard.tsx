import { MOVIE } from '../../../types/movie.types';
import { IMAGE_BASE_URL } from '../../../utils/constants';

type MovieCardProps = {
  movie: MOVIE;
};

const MovieCard = (props: MovieCardProps) => {
  return (
    <div>
      <div className='w-52'>
        <img src={`${IMAGE_BASE_URL}${props.movie.poster_path}`} alt='' />
      </div>
    </div>
  );
};

export default MovieCard;
