import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Starship } from '../starship/type';
import {CartState} from "./type";

const initialState: CartState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Starship>) {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(item => item.name !== action.payload);
        },
        increaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item.name === action.payload);
            if (item) item.count += 1;
        },
        decreaseQuantity(state, action: PayloadAction<string>) {
            const item = state.items.find(item => item.name === action.payload);
            if (item && item.count > 1) item.count -= 1;
        },
        clearItems(state) {
            state.items = [];
        }
    }
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
