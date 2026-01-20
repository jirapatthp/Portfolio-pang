import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import { Layout } from "./pages/Layout";
import { LayoutWithNav } from "./pages/LayoutWithNav";
import Experience from "./pages/Experience";

const router = createBrowserRouter([
  // 🔹 Home (ไม่มี NavBar)
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },

  // 🔹 Pages ที่มี NavBar
  {
    path: "/",
    element: <LayoutWithNav />,
    children: [
      { path: "aboutme", element: <AboutMe /> },
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <Skills /> },
      { path: "experience", element: <Experience /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
