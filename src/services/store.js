import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productSlice/productSlice'
import cartReducer from './cartSlice/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,


  },
})