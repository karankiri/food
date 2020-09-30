import React, { createContext, useReducer, useEffect } from "react";
import { FoodReducer } from "./reducer";
import Restaurants from "../../assets/data.json";

export const FoodContext = createContext();

const initialState = {
  user: {},
  restaurants: Restaurants,
};

const FoodContextProvider = (props) => {
  const [user, dispatch] = useReducer(FoodReducer, {}, () => {
    const localData = localStorage.getItem("user");
    return localData
      ? { user: JSON.parse(localData), restaurants: initialState.restaurants }
      : initialState;
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user.user));
  }, [user]);
  return (
    <FoodContext.Provider value={{ user, dispatch }}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
