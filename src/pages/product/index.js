import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../utils/context/foodContext";
import "./styles.scss";
import RestaurantBanner from "../../component/restaurantBanner/index";
import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
} from "../../utils/actions/index";

export default function Product() {
  const {
    user: { restaurants, user },
    dispatch,
  } = useContext(FoodContext);
  console.log("Product -> user", user);
  const params = useParams();
  let { restaurantID, menuItemID } = params;
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

  const cartQuantity = useMemo(() => {
    if (user.cart && menuItemID) {
      const cartProduct = user.cart.products.filter(
        (item) => item.id == menuItemID
      );
      return cartProduct.length > 0 ? cartProduct[0].quantity : 0;
    }
    return 0;
  }, [user, menuItemID]);

  const onAddClick = () => {
    dispatch({
      type: CART_ADD_PRODUCT,
      payload: {
        product: {
          id: menuItemID,
        },
      },
    });
  };

  const onRemoveClick = () => {
    dispatch({
      type: CART_REMOVE_PRODUCT,
      payload: {
        product: {
          id: menuItemID,
        },
      },
    });
  };

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
          <button
            className="decrease-btn counter-btn"
            onClick={onRemoveClick}
            disabled={cartQuantity < 1}
          >
            -
          </button>
          <span>{cartQuantity}</span>
          <button className="increase-btn counter-btn" onClick={onAddClick}>
            +
          </button>
        </div>
        <button className="add-to-cart" onClick={onAddClick}>
          Add for {productData.offers.price} {restaurantData.currency}
        </button>
      </div>
      <div className="main">
        <div className="description">{productData.description}</div>
      </div>
    </div>
  );
}
