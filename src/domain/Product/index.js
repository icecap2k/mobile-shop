import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../../infrastructure/apiCalls";
import { addCurrentProduct } from "../../redux/actions";
import ProductAction from "./ProductAction";
import ProductDetail from "./ProductDetail";

const Product = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const [productData, setProductData] = useState({});
  useEffect(async () => {
    getProductById(productId).then((product) => {
      setProductData(product);
      dispatch(addCurrentProduct(product));
    });
  }, []);

  const { imgUrl, options } = productData;

  return (
    <section>
      <div>
        <img src={imgUrl} />
      </div>

      <ProductDetail {...productData} />
      <ProductAction {...productId} {...options} />
    </section>
  );
};

export default Product;
