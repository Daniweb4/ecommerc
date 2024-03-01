import {configureStore}from '@reduxjs/toolkit';
import products from './slices/product.slices';
import cart from './slices/cart.slices';

const store=configureStore({
    reducer:{
        products,
        cart,


    }
})
export default store;