// src/slices/cart/cartActions.js
import { cartActions } from "../../Redux/CartSlice.jsx";

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartActions;
