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
  let { restaurantID, menuItemID } = params;
  console.log("Product -> menuItemID", menuItemID);
  const productData = useMemo(() => {
    const restaurantData =
      restaurants.filter((item) => item.restaurant.id === restaurantID)[0]
        .restaurant || {};
    console.log("productData -> restaurantData", restaurantData);
    if (Object.keys(restaurantData).length > 0) {
      let menuItem = {};
      restaurantData.hasMenuSection.map((menuSection) => {
        menuSection.hasMenuItem.map((item) => {
          if (item.id.toString() === menuItemID.toString()) {
            menuItem = item;
          }
        });
      });
      return menuItem;
    }
    return {};
  }, [restaurantID, restaurants]);
  console.log("productData -> productData", productData);

  return (
    <div className="restaurant-page">
      <RestaurantBanner
        name={productData.name}
        id={productData.id}
        rating={productData.offers.rating}
        image={productData.image}
      />
      <div className="main"></div>
    </div>
  );
}
