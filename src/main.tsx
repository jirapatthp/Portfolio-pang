import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { Layout } from "./pages/Layout";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutme", element: <AboutMe /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
