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
      console.log("add to cart payload");
      console.log(action.payload);
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.item._id === action.payload.item._id &&
          item.item.color === action.payload.item.color &&
          item.item.size[0] === action.payload.item.size[0]
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

      // console.log("remove cart payload");
      // console.log(action.payload);
      // console.log("cart");
      // console.log(state.cart);

      state.cart = state.cart.filter(
        (item) =>
          item.item.color !== action.payload.color ||
          item.item.size[0] !== action.payload.size[0] ||
          item.item._id !== action.payload.id
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
        if (item.item._id === action.payload.id && item.count > 0) {
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
