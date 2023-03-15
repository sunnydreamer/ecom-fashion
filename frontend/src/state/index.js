import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      // console.log(action.payload.item);
      const existingItemIndex = state.cart.findIndex(
        (item) => item.item._id === action.payload.item._id
      );

      // console.log(`found index` + existingItemIndex);

      if (existingItemIndex !== -1) {
        // being mutated
        state.cart[existingItemIndex].count += 1;
      } else {
        state.cart = [...state.cart, { item: action.payload.item, count: 1 }];
      }
      console.log(state.cart);
    },

    removeFromCart: (state, action) => {
      // const existingItemIndex = state.cart.findIndex(
      //   (item) => item.item._id === action.payload.item.id
      // );

      // console.log(`found index` + existingItemIndex);

      // console.log(action.payload);
      console.log(action.payload);

      state.cart = state.cart.filter(
        (item) => item.item._id !== action.payload.id
      );
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item._id === action.payload.id) {
          item.count++;
          console.log(state.cart);
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.item._id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
