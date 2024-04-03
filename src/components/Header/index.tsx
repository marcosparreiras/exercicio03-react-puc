import MainMenu from "../MainMenu";
import "./styles.css";

export default function Header() {
  return (
    <header className="main-header">
      <h1>Welcome to Movies List</h1>
      <MainMenu />
    </header>
  );
}
