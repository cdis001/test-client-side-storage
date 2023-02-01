import React, { StrictMode } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Main from "../../pages/Main";
import Cookies from "../../pages/Cookies";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "Cookies",
    element: <Cookies />,
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
