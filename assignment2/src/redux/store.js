import {configureStore} from "@reduxjs/toolkit"
import stocksReducer from './slice/stocks.js' 

export const store = configureStore({
    reducer:{
        stocks: stocksReducer
    }
});