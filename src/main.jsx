import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest.jsx";
import Header from "./components/Header.jsx";
import MainPage from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx";
import ErrorPageFound from "./components/ErrorPage.jsx";
import MenuPage from "./components/MenuPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", //it will work like that. /some.some index.element
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/about",
        element: <MainPage />,
      },
      {
        path: "/about/:name",
        element: <MainPage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      /*  {
        path: "*",
        element: <ErrorPageFound />,
      }, */
    ],
    errorElement: <ErrorPageFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
