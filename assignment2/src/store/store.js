import {configureStore} from "@reduxjs/toolkit"
import stocksReducer from './reducers/stocks.js'
import companyReducer from './reducers/companySlice.js'

export const store = configureStore({
    reducer:{
        stocks: stocksReducer,
        company: companyReducer
    }
});