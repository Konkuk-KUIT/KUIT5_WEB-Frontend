import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Home from '../pages/Home';
import Store from "../pages/Store";
// import Store from "../pages/Stores";
// import Cart from "../pages/Cart";

const Router = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element: <Home/>,
        },
        {
            path:"/Store",
            element:<Store/>,
        },
        // {
        //     path:"/Stores",
        //     element:<Stores/>,
        // },
        // {
        //     path:"/Cart",
        //     element:<Cart/>,
        // },

    ]);
  return <RouterProvider router={router}/>;
};

export default Router;
