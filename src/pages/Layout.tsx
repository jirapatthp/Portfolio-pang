import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <section >
        <Outlet />
      </section>
    </div>
  );
}