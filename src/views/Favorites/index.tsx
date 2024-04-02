import { useSelector } from "react-redux";
import { RootStoreState } from "../../store/store";

export function Favorites() {
  const favorites = useSelector((state: RootStoreState) => state.favorites);

  return (
    <section>
      <h1>My favorite movies</h1>
      <ul>
        {favorites.movies.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
}
