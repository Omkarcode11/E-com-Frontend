const { createSlice } = require('@reduxjs/toolkit');

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      return [...action.payload]
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
