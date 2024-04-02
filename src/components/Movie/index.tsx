import { Link } from "react-router-dom";

interface MovieProps {
  movie: {
    title: string;
    poster_path: string;
    id: string;
  };
}

export default function Movie({ movie }: MovieProps) {
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
      </div>
    </div>
  );
}
