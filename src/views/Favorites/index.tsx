import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../store/store";
import "./styles.css";
import { Link } from "react-router-dom";
import { removeMovie } from "../../store/features/favorites";

export function Favorites() {
  const favorites = useSelector((state: RootStoreState) => state.favorites);
  const dispatch = useDispatch();

  return (
    <section className="favotites-container">
      <h1>My favorite movies</h1>
      {favorites.movies.length === 0 && <h3>Your list is empty 😓</h3>}
      {favorites.movies.length > 0 && (
        <ul>
          {favorites.movies.map((movie) => (
            <li>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <button onClick={() => dispatch(removeMovie(movie))}>
                remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
