import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Home'
import Products from './Products' 

const Router=()=>{

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Home/>,
        },
        {
            path: "products",
            element:<Products/>,
        },
    ])

    return <RouterProvider router ={router}/>;
};

export default Router
