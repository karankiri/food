import React from "react";
import "./style.scss";

export default function RestaurantBanner({
  name,
  rating,
  image,
  cuisines,
  id,
}) {
  return (
    <div className="banner-container">
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
