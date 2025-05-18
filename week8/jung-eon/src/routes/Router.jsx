import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Stores from "../pages/Stores";
import Store from "../pages/Store";
import Cart from "../pages/Cart";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/store" />} />
      <Route path="/store" element={<Stores />} />
      <Route path="/store/:storeId" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
