import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

export default function RestaurantCard({ name, rating, image, cuisines, id }) {
  const history = useHistory();

  const cardClick = () => {
    history.push(`/restaurant/${id}`);
  };

  return (
    <div className="card-container" onClick={cardClick}>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-content">
        <div className="name-container">
          <span>{name}</span>
        </div>
        <div className="cuisines-container">
          <span>{cuisines}</span>
        </div>
        <div className="rating-container">
          <span className={"star-icon"}></span>
          <span className="rating-text">{rating}</span>
        </div>
      </div>
    </div>
  );
}
