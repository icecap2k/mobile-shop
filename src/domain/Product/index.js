import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../infrastructure/apiCalls";
import ProductAction from "./ProductAction";
import ProductDetail from "./ProductDetail";

const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  useEffect(async () => {
    setProductData(await getProductById(id));
  }, []);

  const { imgUrl, options } = productData;

  return (
    <section>
      <div>
        <img src={imgUrl} />
      </div>

      <ProductDetail {...productData} />
      <ProductAction productId={id} {...options} />
    </section>
  );
};

export default Product;
