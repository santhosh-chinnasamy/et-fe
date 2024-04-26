import { useState, Fragment, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Album } from "./album";
import Expense from "./expense";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./login";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ children }) => {
  console.log(import.meta.env.API_URL)
  const [cookies] = useCookies();
  return cookies.token ? children : <Navigate to="/login" />;
};

const routes = createBrowserRouter([
  {
    path: "/expense",
    // Component: Expense,
    element: (
      <ProtectedRoute>
        <Expense />
      </ProtectedRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Album />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    Component: Login,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
