import Home from "../pages/home";
import Restaurant from "../pages/restaurant";

import React from "react";
import { Switch, Route, Redirect } from "react-router";

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/restaurant/:restaurantID" component={Restaurant} />
      <Route
        exact
        path="/restaurant/:restaurantID/menuItem/:menuItemID"
        component={Restaurant}
      />
      <Route exact path="/*" render={() => <Redirect to="/home" />} />
    </Switch>
  );
};
