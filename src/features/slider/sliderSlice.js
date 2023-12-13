import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    slider: {transform: 'translateX(0vw)'}
}

export const slideSlice = createSlice({
    name: 'slide',
    initialState,
    reducers:{
        updateStyle : (state, action)=>{
            state.slider.transform = action.payload
        },
    }
})

export const {updateStyle} = slideSlice.actions

export default slideSlice.reducer
