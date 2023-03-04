import { configureStore } from '@reduxjs/toolkit';
import buySlice from '../feature/buySlice';
import cartSlice from '../feature/cartSlice';
import orderSlice from '../feature/orderSlice';
import userSlice from '../feature/userSlice';



const store = configureStore({
    reducer:{
        cart : cartSlice,
        buy : buySlice,
        order : orderSlice,
        user : userSlice
    }
})

export default store