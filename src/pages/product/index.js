import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../utils/context/foodContext";
import "./styles.scss";
import RestaurantBanner from "../../component/restaurantBanner/index";

export default function Product() {
  const {
    user: { restaurants, user },
  } = useContext(FoodContext);
  console.log("Home -> user", user);
  const params = useParams();
  let { restaurantID, menuItemID } = params;
  console.log("Product -> menuItemID", menuItemID);
  const { productData, restaurantData } = useMemo(() => {
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
      return { restaurantData, productData: menuItem };
    }
    return { restaurantData, productData: {} };
  }, [restaurantID, restaurants, menuItemID]);
  console.log("productData -> productData", productData);

  return (
    <div className="product-page">
      <RestaurantBanner
        name={productData.name}
        id={productData.id}
        rating={productData.offers.rating}
        image={productData.image}
      />
      <div className="addToCart">
        <div className="counter-container">
          <button className="decrease-btn">-</button>
          <span>{1}</span>
          <button className="increase-btn">+</button>
        </div>
        <button className="add-to-cart">
          Add for {productData.offers.price}
          {restaurantData.currency}
        </button>
      </div>
      <div className="main">
        <div className="description">{productData.description}</div>
      </div>
    </div>
  );
}
