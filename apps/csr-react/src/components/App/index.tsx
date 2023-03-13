import React, { StrictMode } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Main from "../../pages/Main";
import Cookies from "../../pages/Cookies";
import CookiesToDos from "../../pages/Cookies/ToDos";
import CookiesLogin from "../../pages/Cookies/Login";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  { path: "cookies", element: <Cookies /> },
  {
    path: "cookies/toDos",
    element: <CookiesToDos />,
  },
  {
    path: "cookies/login",
    element: <CookiesLogin />,
  },
]);

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};
export default App;
