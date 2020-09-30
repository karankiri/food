import React, { createContext, useReducer, useEffect } from "react";
import { FoodReducer } from "./reducer";

export const FoodContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const FoodContextProvider = (props) => {
  const [user, dispatch] = useReducer(FoodReducer, {}, () => {
    const localData = localStorage.getItem("user");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <FoodContext.Provider value={{ user, dispatch }}>
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
