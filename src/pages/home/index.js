import React, { useContext } from "react";
import RestaurantCard from "../../component/restaurantCard/index";
import { FoodContext } from "../../utils/context/foodContext";
import "./styles.scss";

export default function Home() {
  const {
    user: { restaurants, user },
  } = useContext(FoodContext);
  console.log("Home -> user", user);

  return (
    <div className="home-page">
      <div className="home-banner-container"></div>
      <div className="main">
        {restaurants.map(({ restaurant }) => (
          <div className="restaurant-card-container">
            <RestaurantCard
              name={restaurant.name}
              rating={restaurant.user_rating.aggregate_rating}
              image={restaurant.featured_image}
              key={restaurant.id}
              cuisines={restaurant.cuisines}
              id={restaurant.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
