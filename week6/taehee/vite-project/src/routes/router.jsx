import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Store from "../pages/Store";
import Stores from "../pages/Stores";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/store",
      element: <Store />,
    },
    {
      path: "/stores",
      element: <Stores />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
