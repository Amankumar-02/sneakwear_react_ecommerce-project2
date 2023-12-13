import {configureStore} from '@reduxjs/toolkit';
import slideReducer from '../features/slider/sliderSlice';

// step 4 syntax mandatory
export const store = configureStore({
    reducer: slideReducer
})
