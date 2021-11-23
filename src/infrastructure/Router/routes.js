import ProductList from "../../domain/ProductList.js";
import Product from "../../domain/Product";

export default [
  { path: "/", name: "Home", Component: ProductList },
  {
    path: "/products/:productId",
    name: "Product detail",
    Component: Product,
  },
];
