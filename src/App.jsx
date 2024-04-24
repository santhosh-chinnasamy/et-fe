import { useState, Fragment, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Album } from "./album";
import Expense from "./expense";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Login from "./login";

const routes = createBrowserRouter([
  {
    path: "/expense",
    Component: Expense,
  },
  {
    path: "/",
    Component: Album,
  },
  // {
  //   path:"/login",
  //   Component: Login
  // }
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
