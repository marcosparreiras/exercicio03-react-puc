import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStoreState } from "../../store/store";
import { addMovie, removeMovie } from "../../store/features/favorites";
import { Movie as IMovie } from "../../api/MoviesService";

interface MovieProps {
  movie: IMovie;
}

export default function Movie({ movie }: MovieProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootStoreState) => state.favorites);
  const favoritesIds = favorites.movies.map((m) => m.id);

  function buttonGenerator(movieId: string, favoritesIds: string[]) {
    if (favoritesIds.includes(movieId)) {
      return (
        <button onClick={() => dispatch(removeMovie(movie))}>
          Remove from favorites
        </button>
      );
    }
    return (
      <button onClick={() => dispatch(addMovie(movie))}>
        Add to favorites
      </button>
    );
  }

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
      </div>
      <div>
        <h3>{movie.title}</h3>
        <Link to={`/movie/${movie.id}`}>Show details</Link>
        {buttonGenerator(movie.id, favoritesIds)}
      </div>
    </div>
  );
}
