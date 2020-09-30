import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

export default function MenuItemCard({
  name,
  rating,
  image,
  description,
  id,
  price,
  currency,
  restaurantID,
}) {
  const history = useHistory();

  const cardClick = () => {
    history.push(`/restaurant/${restaurantID}/menu-item/${id}`);
  };

  return (
    <div className="menu-item-container" onClick={cardClick}>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-content">
        <div className="name-container">
          <span>{name}</span>
        </div>
        <div className="description-container">
          <span>{description}</span>
        </div>
        <div className="">
          <div className="currency-container">
            <span className={"price"}>{price}</span>
            <span className="currency">{currency}</span>
          </div>
          <div className="rating-container">
            <span className={"star-icon"}></span>
            <span className="rating-text">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
