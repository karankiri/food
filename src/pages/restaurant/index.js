import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../utils/context/foodContext";
import "./styles.scss";
import RestaurantBanner from "../../component/restaurantBanner/index";

export default function Restaurant() {
  const {
    user: { restaurants, user },
  } = useContext(FoodContext);
  console.log("Home -> user", user);
  const params = useParams();
  let restaurantID = params.restaurantID;
  const restaurantData = useMemo(() => {
    return (
      restaurants.filter((item) => item.restaurant.id === restaurantID)[0]
        .restaurant || {}
    );
  }, [restaurantID, restaurants]);
  console.log("restaurantData -> restaurantData", restaurantData);

  return (
    <div className="home-page">
      <RestaurantBanner
        name={restaurantData.name}
        id={restaurantData.id}
        rating={restaurantData.user_rating.aggregate_rating}
        image={restaurantData.featured_image}
        cuisines={restaurantData.cuisines}
      />
      <div className="main"></div>
    </div>
  );
}
