import React from 'react';
import { createSlice } from '@reduxjs/toolkit';


const initial = {
    cartIsVisible: false
}

export const uiSlice = createSlice({
    name: "ui",
    initialState: initial,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const uiActions = uiSlice.actions; 