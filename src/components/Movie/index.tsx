import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootStoreState } from "../../store/store";
import { addMovie, removeMovie } from "../../store/features/favorites";
import { Movie as IMovie } from "../../api/MoviesService";
import "./styles.css";

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
        <button
          className="movie-btn movie-btn-remove"
          onClick={() => dispatch(removeMovie(movie))}
        >
          Remove from favorites
        </button>
      );
    }
    return (
      <button
        className="movie-btn movie-btn-add"
        onClick={() => dispatch(addMovie(movie))}
      >
        Add to favorites
      </button>
    );
  }

  return (
    <div className="movie-container">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
      <div className="movie-content-container">
        <h3>{movie.title}</h3>
        <div className="movie-btns-container">
          <Link to={`/movie/${movie.id}`}>Show details</Link>
          {buttonGenerator(movie.id, favoritesIds)}
        </div>
      </div>
    </div>
  );
}
