import React, { useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store.js";
import "./styles.css";
import { addProducts } from "./redux/actions.js";
import { getProducts } from "./infrastructure/apiCalls.js";
import RouterApp from "./infrastructure/Router";

const renderApp = () => {
  render(
    <div className="app">
      <Provider store={store}>
        <RouterApp />
      </Provider>
    </div>,
    document.getElementById("root")
  );
};

const AppLoader = () => {
  const dispatch = useDispatch();
  useEffect(async () => {
    const products = await getProducts();
    dispatch(addProducts(products));
    renderApp();
  }, []);
  return <>Loading</>;
};

const InitialRender = () => {
  render(
    <Router>
      <Provider store={store}>
        <Route path="/" component={AppLoader} />
      </Provider>
    </Router>,
    document.getElementById("root")
  );
};
InitialRender();
