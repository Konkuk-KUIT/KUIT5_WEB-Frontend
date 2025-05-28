import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Stores from "./stores";
import Store from "./store";
import Cart from "./cart";

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
