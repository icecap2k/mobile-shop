import { makeGetRequest, makePostRequest } from "./ClientWrapper";

const API_URL = "https://front-test-api.herokuapp.com";

export const getProducts = async () => {
  return await makeGetRequest(`${API_URL}/api/product`).then(
    (requestData) => requestData
  );
};

export const getProductById = async (productId) => {
  return await makeGetRequest(`${API_URL}/api/product/${productId}`).then(
    (requestData) => requestData
  );
};

export const addProductToCart = async (productInfo) => {
  return await makePostRequest(`${API_URL}/api/cart`, productInfo).then(
    (requestData) => requestData
  );
};
