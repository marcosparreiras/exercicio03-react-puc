import { useEffect, useState } from "react";
import { Movie, MoviesService } from "../../api/MoviesService";
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      if (!id) {
        return;
      }
      const data = await MoviesService.getMovieDetail(id);
      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <div>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt=""
            />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <ul>
              <li>Budget: {movie.budget}</li>
              <li>Original language: {movie.original_language}</li>
              <li>Popularity: {movie.popularity}</li>
            </ul>
          </div>
        </div>
        <div>
          <div>{movie.overview}</div>
        </div>
      </div>
    </section>
  );
}
