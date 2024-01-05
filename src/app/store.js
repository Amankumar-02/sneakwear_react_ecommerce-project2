import {configureStore} from '@reduxjs/toolkit';
import slideReducer from '../features/slider/sliderSlice';
import cartReducer from '../features/cart/cartSlice';

// step 4 syntax mandatory
export const store = configureStore({
    reducer: {
        slide: slideReducer, 
        cart: cartReducer,
    }
})
