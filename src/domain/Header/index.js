import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Breadcrumb />
      <ShoppingCart />
    </header>
  );
};

export default Header;
