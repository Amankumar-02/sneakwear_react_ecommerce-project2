import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart:""
}

export const cartSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers:{
        fetchCartData : (state, action)=>{
            state.cart = action.payload
        },
    }
})

export const {fetchCartData} = cartSlice.actions

export default cartSlice.reducer