import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MovieDetails } from "./views/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
