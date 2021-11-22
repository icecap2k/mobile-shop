import React from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const { count } = useSelector((state) => state.cart);
  return <div>Shopping items: {count}</div>;
};

export default ShoppingCart;
