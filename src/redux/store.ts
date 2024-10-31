import { configureStore } from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import starshipsReducer from './starship/starshipSlice';
import authReducer from './auth/authSlice';
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        starships: starshipsReducer,
        auth: authReducer,
        cart: cartSlice,

    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;