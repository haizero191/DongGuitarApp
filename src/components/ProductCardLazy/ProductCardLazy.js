import React, { useEffect, useState } from "react";
import "./ProductCardLazy.scss";

const ProductCardLazy = ({ isLoad = false }) => {
  return (
    <div className="ProductCardLazy">
      <div className="image">

      </div>
      <div className="info">
        <p className="name"></p>
        <p className="price"></p>
      </div>
    </div>
  );
};

export default ProductCardLazy;
