import Product from "../domain/Product";

export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
export const UPDATE_CART_COUNT = "UPDATE_CART_COUNT";

export const addProducts = (productList) => ({
  type: ADD_PRODUCTS,
  productList,
});

export const addCurrentProduct = (product) => {
  const { brand, model } = product;
  return {
    type: SET_CURRENT_PRODUCT,
    currentProduct: { brand, model },
  };
};

export const updateCartCount = (count) => ({
  type: UPDATE_CART_COUNT,
  count,
});
