import { createSlice } from "@reduxjs/toolkit";

const initial = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initial,
    reducers: {

        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.itemID === newItem.itemID);
            if (!existingItem) {
                state.items.push({
                    itemID: newItem.itemID,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }

            state.totalQuantity++;
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.itemID === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.itemID !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            state.totalQuantity--;
        }
    }
});

export const cartActions = cartSlice.actions;