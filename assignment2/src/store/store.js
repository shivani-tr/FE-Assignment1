import {configureStore} from "@reduxjs/toolkit"
import stocksReducer from './selectors/stocks.js' 

export const store = configureStore({
    reducer:{
        stocks: stocksReducer
    }
});