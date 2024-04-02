import { Link } from "react-router-dom";

interface MovieProps {
  title: string;
  poster_path: string;
  id: string;
}

export default function Movie({ title, poster_path, id }: MovieProps) {
  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <Link to={`/movie/${id}`}>Ver detalhes</Link>
      </div>
    </div>
  );
}
