import React, { StrictMode } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Main from "../../pages/Main";
import Cookies from "../../pages/Cookies";
import CookiesToDos from "../../pages/Cookies/ToDos";
import CookieToDos from "../../pages/Cookies/CookieToDos";
import CookiesLogin from "../../pages/Cookies/Login";
import SessionStorages from "../../pages/sessionstorages";
import SessionStoragesToDos from "../../pages/sessionstorages/ToDos";
import OnlySessionStoragesToDos from "../../pages/sessionstorages/sessionStoragesToDos";
import SessionStoragesLogin from "../../pages/sessionstorages/Login";
import LocalStorages from "../../pages/localstorages";
import OnlyLocalStoragesToDos from "../../pages/localstorages/localStoragesToDos";
import IndexedDB from "../../pages/indexedDB";
import OnlyIndexedDbToDos from "../../pages/indexedDB/indexedDBToDos";
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
  {
    path: "cookies/cookieTodos",
    element: <CookieToDos />,
  },
  {
    path: "sessionstorages",
    element: <SessionStorages />,
  },
  {
    path: "sessionstorages/toDos",
    element: <SessionStoragesToDos />,
  },
  {
    path: "sessionstorages/login",
    element: <SessionStoragesLogin />,
  },
  {
    path: "sessionstorages/sessionstoragesTodos",
    element: <OnlySessionStoragesToDos />,
  },
  {
    path: "localstorages",
    element: <LocalStorages />,
  },
  {
    path: "localstorages/localStoragesTodos",
    element: <OnlyLocalStoragesToDos />,
  },
  {
    path: "indexedDB",
    element: <IndexedDB />,
  },
  {
    path: "indexedDB/IndexedDBTodos",
    element: <OnlyIndexedDbToDos />,
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
