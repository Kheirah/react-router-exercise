import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Movies from "./Movies.jsx";
import DetailedMovies from "./DetailedMovie.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <h3>Home</h3> },
      { path: "movies", element: <Movies /> },
      { path: "movies/:movieId", element: <DetailedMovies /> },
      { path: "actors", element: <h3>Actors</h3> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
