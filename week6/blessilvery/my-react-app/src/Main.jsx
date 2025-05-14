import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Main;
