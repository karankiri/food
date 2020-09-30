import { Routes } from "./routes";
import { createBrowserHistory } from "history";
import React from "react";
import { Router } from "react-router";
import FoodContextProvider from "./utils/context/foodContext";

const history = createBrowserHistory();
function App() {
  return (
    <FoodContextProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </FoodContextProvider>
  );
}

export default App;
