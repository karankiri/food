import Home from "../pages/home";
import Layout from "../component/layout";
import Product from "../pages/product/index";
import Restaurant from "../pages/restaurant";

import React from "react";
import { Switch, Route, Redirect } from "react-router";

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home">
        <Layout page={"home"}>
          <Home />
        </Layout>
      </Route>
      <Route exact path="/restaurant/:restaurantID">
        <Layout page="restaurant">
          <Restaurant />
        </Layout>
      </Route>
      <Route exact path="/restaurant/:restaurantID/menuItem/:menuItemID">
        <Layout page={"product"}>
          <Product />
        </Layout>
      </Route>
      <Route exact path="/*" render={() => <Redirect to="/home" />} />
    </Switch>
  );
};
