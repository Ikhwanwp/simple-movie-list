import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/pages/index";
import "./assets/css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/layouts/404";
import DetailMovieSection from "./components/layouts/DetailMovieSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <DetailMovieSection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
