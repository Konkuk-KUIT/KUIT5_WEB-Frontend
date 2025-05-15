import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from '../pages/Home';
// import Stores from "../pages/Stores";
// import Store from "../pages/Store";
// import Cart from "../pages/Cart";

const Router = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element: <Home/>,
        },
        // {
        //     path:"/Stores",
        //     element:<Stores/>,
        // },
        // {
        //     path:"/Store",
        //     element:<Store/>,
        // },
        // {
        //     path:"/Cart",
        //     element:<Cart/>,
        // },

    ]);
  return <RouterProvider router={router}/>;
};

export default Router;
