import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"; // ⬅ Navigate import 추가

import Home from "./routes/Home.jsx";
import Stores from "./routes/Stores.tsx";
import Cart from "./routes/Cart.tsx";
import GreetingPage from "./components/home/GreetingPage.tsx";
import StoreMenuPage from "./routes/StoreMenu.tsx";

// ✅ 여기 라우터 설정만 수정
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true, // ⬅ "/" 경로로 진입했을 때
        element: <Navigate to="/store?category=샐러드" replace />, // ⬅ 자동으로 이동
      },
      {
        path: "store",
        element: <Stores />
      },
      {
        path: "store/:storeId",
        element: <StoreMenuPage />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
