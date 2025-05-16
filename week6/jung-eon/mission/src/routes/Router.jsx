import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Stores from "../pages/Stores";
import Store from "../pages/Store";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Stores />} />
      <Route path="/store/:storeId" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
