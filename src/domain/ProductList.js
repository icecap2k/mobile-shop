import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCurrentProduct } from "../redux/actions";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //reset store
    dispatch(addCurrentProduct({}));
  }, []);
  const { list } = useSelector((state) => state.product);

  return (
    <section>
      {list?.map(({ id, imgUrl, brand, model, price }) => (
        <article key={id}>
          <Link to={`/products/${id}`}>
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
