import React from "react";

const ProductDetail = ({ brand, model, price, dimentions, weight }) => {
  return (
    <div>
      <h2>Description</h2>
      <ul>
        <li>{brand}</li>
        <li>{model}</li>
        <li>{price}</li>
        <li>{dimentions}</li>
        <li>{weight}</li>
      </ul>
    </div>
  );
};

export default ProductDetail;
