import {configureStore} from "@reduxjs/toolkit"
import stocksReducer from './reducers/stocks.js' 

export const store = configureStore({
    reducer:{
        stocks: stocksReducer
    }
});