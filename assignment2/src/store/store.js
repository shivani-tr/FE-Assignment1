// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import stocksReducer from './reducers/stocks';
import companyReducer from './reducers/companySlice';

export const store = configureStore({
    reducer: {
        stocks: stocksReducer,
        company: companyReducer,
        product: productReducer,
    },
});
