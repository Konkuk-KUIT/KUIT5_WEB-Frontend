import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Stores from "./Stores";
import Store from "./Store";
import Cart from "./Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Stores />,
    },
    {
      path: "/store/:storeId",
      element: <Store />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
