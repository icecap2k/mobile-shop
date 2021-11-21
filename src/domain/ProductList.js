import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductList = () => {
  const productList = useSelector((state) => state.mobileProductList);

  return (
    <section>
      {productList?.map(({ id, imgUrl, brand, model, price }) => (
        <article key={id}>
          <Link to={`/detail/${id}`}>
            <img src={imgUrl} />
            {brand}
            {model}
            {price}
          </Link>
        </article>
      ))}
    </section>
  );
};

export default ProductList;
