import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from "../actions/index";

export const FoodReducer = (state, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      let cartItems = state.user.cart ? state.user.cart.products : [];
      const { id: productID } = action.payload.product;
      if (cartItems.find((item) => item.id == productID)) {
        cartItems = cartItems.map((item) => {
          if (item.id == productID) {
            return {
              id: item.id,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        cartItems.push({
          id: productID,
          quantity: 1,
        });
      }
      const count = cartItems.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      return {
        ...state,
        user: {
          ...state.user,
          cart: {
            count: count,
            products: cartItems,
          },
        },
      };
    case CART_REMOVE_PRODUCT: {
      let products = state.user.cart ? state.user.cart.products : [];
      const { id: productID } = action.payload.product;
      if (products.find((item) => item.id == productID)) {
        products = products.map((item) => {
          if (item.id == productID) {
            return {
              id: item.id,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      } else {
        return;
      }
      const count = products.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      return {
        ...state,
        user: {
          ...state.user,
          cart: {
            count: count,
            products: products,
          },
        },
      };
    }
    default:
      return state;
  }
};
