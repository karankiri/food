import Home from "../pages/home/index";
import React from "react";
import { Switch, Route, Redirect } from "react-router";

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/*" render={() => <Redirect to="/home" />} />
    </Switch>
  );
};
