import { Outlet } from "react-router-dom";
import MainMenu from "../MainMenu";

export default function Header() {
  return (
    <>
      <header>
        <h1>Welcome to Movies List</h1>
        <MainMenu />
      </header>
      <Outlet />
    </>
  );
}
