import { createSlice } from '@reduxjs/toolkit';



const buySlice  = createSlice({
    name  : 'buy',
    initialState: [],
    reducers:{
        buyNow:(state,action)=>{
         state[0]=  action.payload
        }
    }
})


export const {buyNow} = buySlice.actions
export default buySlice.reducer