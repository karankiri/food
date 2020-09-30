import React, { useContext, useMemo } from "react";
import { FoodContext } from "../../utils/context/foodContext";
import "./style.scss";

export default function Header() {
  const {
    user: { user },
  } = useContext(FoodContext);
  const cartQuantity = useMemo(() => {
    return user.cart ? user.cart.count : 0;
  }, [user]);
  return (
    <header className="app-header">
      <div className="app-logo">
        <h3>Foody</h3>
      </div>
      <div className="cart-container">
        <div className="icon-container"></div>
        <span className="quantity">{cartQuantity}</span>
      </div>
    </header>
  );
}
