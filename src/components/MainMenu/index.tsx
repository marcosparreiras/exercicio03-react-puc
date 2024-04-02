import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/favoritos">Favorites</Link>
      </li>
    </ul>
  );
}
