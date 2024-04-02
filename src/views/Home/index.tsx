import { useEffect, useState } from "react";
import { Movie as IMovie, MoviesService } from "../../api/MoviesService";
import Movie from "../../components/Movie";

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await MoviesService.getMovies();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id} className="col-3">
            <Movie movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
