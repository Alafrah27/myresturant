import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 1,
      name: "Margarita",
      quantity: 1,
      price: 1000,
      totalPrice: 1000,
    },
  ],
};

const CartSlice =  createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
        item.totalPrice -= item.price;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});


export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItem,
} = CartSlice.actions;

export default CartSlice.reducer;

export const getCart = (state) => state.cart.cart;
