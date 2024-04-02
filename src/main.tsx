import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./views/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MovieDetails } from "./views/MovieDetails";
import { Provider } from "react-redux";
import store from "./store/store";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
