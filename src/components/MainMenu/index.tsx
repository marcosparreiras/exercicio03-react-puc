import { Link } from "react-router-dom";
import "./styles.css";

export default function MainMenu() {
  return (
    <ul className="main-menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/favorites">Favorites</Link>
      </li>
    </ul>
  );
}
