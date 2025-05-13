import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Home from "./Home";
import Products from "./Products";

const Router = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element: <Home/>,
        },//Home이라는 컴포넌트 렌더링
        {
            path:"/products",
            element:<Products/>,
        }//Products라는 컴포넌트 렌더링
    ]);
  return <RouterProvider router={router}/>;
};

export default Router;
