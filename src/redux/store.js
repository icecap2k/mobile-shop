import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  ADD_PRODUCTS,
  SET_CURRENT_PRODUCT,
  UPDATE_CART_COUNT,
} from "./actions";

const initialState = {
  product: {
    list: [],
    current: {},
  },
  cart: {
    count: 0,
  },
};

export const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        product: {
          ...state.product,
          list: action.productList,
        },
      };
    case SET_CURRENT_PRODUCT:
      console.log("SET_CURRENT_PRODUCT", action);
      return {
        ...state,
        product: {
          ...state.product,
          current: action.currentProduct,
        },
      };
    case UPDATE_CART_COUNT:
      return {
        ...state,
        cart: {
          count: action.count + state.cart.count,
        },
      };
    default:
      return state;
  }
};

// Added redux to devtool to check redux status
export default createStore(
  products,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
