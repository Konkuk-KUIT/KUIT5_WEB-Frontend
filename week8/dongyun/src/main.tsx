import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home.jsx";
import GreetingPage from "./components/home/GreetingPage.tsx";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children:[
            {
                path:"/",
                element: <GreetingPage/>,
            },
            // {
            //     path:"/store",
            //     element: <Stores category="샐러드"/>
            // },
            // {
            //     path:"/store/:storeId",
            //     element: <StoreMenuPage storeName="샐로리 한남점"/>
            // },
            // {
            //     path:"/cart",
            //     element: <Cart />
            // }
        ]
    },

])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
