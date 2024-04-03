import { useEffect, useState } from "react";
import { Movie as IMovie, MoviesService } from "../../api/MoviesService";
import Movie from "../../components/Movie";
import "./styles.css";

export function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await MoviesService.getMovies();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <div className="home-container">
      {movies.map((movie) => (
        <div key={movie.id} className="col-3">
          <Movie movie={movie} />
        </div>
      ))}
    </div>
  );
}
