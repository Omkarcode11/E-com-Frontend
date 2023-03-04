import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      return [...state, action.payload];
    },
    removeItem: (state, action) => {
      let dummy = [...state];
      let id = action.payload.id;
      let index = dummy.findIndex((i) => i.id === id);
      dummy.splice(index, 1);
      return [...dummy];
    },
    manageQuantity: (state, action) => {
      let id = action.payload.id;
      let index = state.findIndex((i) => i.id === id);
      if (state[index].qty === 1 && action.payload.qty === -1) {
        state[index].qty = 1;
      } else {
        state[index].qty += action.payload.qty;
      }
    },
  },
});

export const { addCart, removeItem, manageQuantity } = cartSlice.actions;
export default cartSlice.reducer;
