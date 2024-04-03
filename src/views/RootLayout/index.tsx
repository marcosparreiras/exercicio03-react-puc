import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";

export function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <Outlet />
    </div>
  );
}
