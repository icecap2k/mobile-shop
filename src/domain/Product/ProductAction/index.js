import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../infrastructure/apiCalls";
import { updateCartCount } from "../../../redux/actions";
import ProductOption from "../ProductOption";

const ProductAction = ({ productId, colors, storages }) => {
  const NOT_SELECTED = -1;
  const [color, setColor] = useState(NOT_SELECTED);
  const [storage, setStorage] = useState(NOT_SELECTED);
  const [disableAddToCart, setDisableAddToCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisableAddToCart(color === NOT_SELECTED || storage === NOT_SELECTED);
  }, [color, storage]);

  const handleButtonAdd = () => {
    setDisableAddToCart(true);
    addProductToCart({
      id: productId,
      colorCode: color,
      storageCode: storage,
    }).then(({ count }) => {
      dispatch(updateCartCount(count));
      setDisableAddToCart(false);
    });
  };

  return (
    <div>
      <h2>Options</h2>
      <ProductOption options={colors} name="color" changeValue={setColor}>
        Choose color:
      </ProductOption>
      <ProductOption options={storages} name="storage" changeValue={setStorage}>
        Choose storage:
      </ProductOption>
      <button onClick={handleButtonAdd} disabled={disableAddToCart}>
        Add product
      </button>
    </div>
  );
};

export default ProductAction;
