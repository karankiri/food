import React, { useContext, useMemo } from "react";
import { FoodContext } from "../../utils/context/foodContext";
import "./style.scss";
import { useHistory } from "react-router-dom";

export default function Header() {
  const {
    user: { user },
  } = useContext(FoodContext);
  const cartQuantity = useMemo(() => {
    return user.cart ? user.cart.count : 0;
  }, [user]);
  const history = useHistory();

  const headerClick = () => {
    history.push(`/home`);
  };
  return (
    <header className="app-header">
      <div className="app-logo" role="button" onClick={headerClick}>
        <h3>Foody</h3>
      </div>
      <div className="cart-container">
        <div className="icon-container"></div>
        <span className="quantity">{cartQuantity}</span>
      </div>
    </header>
  );
}
