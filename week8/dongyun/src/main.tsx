import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Stores from "./routes/Stores.tsx";
import Cart from "./routes/Cart.tsx";
import GreetingPage from "./components/home/GreetingPage.tsx";
import StoreMenuPage from "./routes/StoreMenu.tsx";
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
        children:[
            {
                path:"/",
                element: <GreetingPage/>,
            },
            {
                path:"/store",
                element: <Stores/>
            },
            {
                path:"/store/:storeId",
                element: <StoreMenuPage/>
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ]
    },

])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
