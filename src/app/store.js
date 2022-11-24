import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import productReducer from '../features/productSlice'

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    },
})