import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./UiSlice";
import { cartSlice } from "./CartSlice";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
})