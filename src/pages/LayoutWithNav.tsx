import { Outlet } from "react-router-dom";
import CursorIcon from "../assets/yellow.png";
import "../App.css";
import NavBar from "../companents/NavBar";

export function LayoutWithNav() {
  return (
    <div
      style={{
        cursor: `url(${CursorIcon}), auto`,
      }}
      className="min-h-screen"
    >
      <NavBar />
      <Outlet />
    </div>
  );
}
