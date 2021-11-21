export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const UPDATE_CART_COUNT = "UPDATE_CART_COUNT";

export const addProducts = (productList) => ({
  type: ADD_PRODUCTS,
  productList,
});

export const updateCartCount = (count) => ({
  type: UPDATE_CART_COUNT,
  count,
});
