import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../utils/context/foodContext";
import "./styles.scss";
import RestaurantBanner from "../../component/restaurantBanner/index";
import MenuItemCard from "../../component/menuItemCard";

export default function Product() {
  const {
    user: { restaurants, user },
  } = useContext(FoodContext);
  console.log("Home -> user", user);
  const params = useParams();
  let { restaurantID, menuItemID } = params.restaurantID;
  const productData = useMemo(() => {
    return (
      restaurants.filter((item) => item.restaurant.id === restaurantID)[0]
        .restaurant || {}
    );
  }, [restaurantID, restaurants]);
  console.log("restaurantData -> restaurantData", productData);

  return (
    <div className="restaurant-page">
      <RestaurantBanner
        name={productData.name}
        id={productData.id}
        rating={productData.user_rating.aggregate_rating}
        image={productData.featured_image}
        cuisines={productData.cuisines}
      />
      <div className="main"></div>
    </div>
  );
}
