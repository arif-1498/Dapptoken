import {configureStore} from "@reduxjs/toolkit";
import { cartReducer } from "../Redux/reducers/CartReducer";
export const Store=configureStore({
    reducer:{
        cart: cartReducer,
    }
    
})