import React, { useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store.js";
import ProductList from "./domain/ProductList.js";
import Product from "./domain/Product";
import "./styles.css";
import { addProducts } from "./redux/actions.js";
import { getProducts } from "./infrastructure/apiCalls.js";

const renderApp = () => {
  render(
    <div className="app">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/detail/:id" component={Product} />
          </Switch>
        </Router>
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
