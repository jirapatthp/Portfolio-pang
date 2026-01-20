import { Outlet } from "react-router-dom";
import CursorIcon from "../assets/yellow.png";
import "../App.css";

export function Layout() {
  return (
    <div
      style={{
        cursor: `url(${CursorIcon}), auto`,
      }}
      className="min-h-screen"
    >
      <Outlet />
    </div>
  );
}
