import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductLayout from "../pages/ProductLayout/ProductLayout";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import About from "../pages/About/About";
import Checkout from "../pages/Checkout/Checkout";
import PostPurchase from "../pages/PostPurchase/PostPurchase";

const AppRoutes = () => {


  return (
    <Routes>
      {/* Home Router */}
      <Route path="/" element={<Home />} />

      {/* Products of store router */}
      <Route path="/products" element={<ProductLayout />}></Route>
      <Route path="/products/view/:id" element={<ProductDetail />}></Route>

      {/* Checkout router */}
      <Route path="/checkout" element={<Checkout />}></Route>

      {/* Post-purchase page */}
      <Route path="/thanks" element={<PostPurchase />}></Route>

      {/* About page */}
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default AppRoutes;
