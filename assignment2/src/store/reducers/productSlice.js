import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
    products: [],
    categories: [],
    selectedCategory: null,
    pagination: { limit: 15, skip: 0, page: 1 },
    loading: false,
    error: null,
};



// Fetch all products
export const fetchAllProducts = createAsyncThunk(
    'product/fetchAllProducts',
    async (_, { dispatch, getState, rejectWithValue }) => {
        const { limit, skip } = getState().product.pagination;
        dispatch(setLoading(true)); 
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            dispatch(setProducts(response.data.products)); 
        } catch (error) {
            return rejectWithValue(error.message); 
        } finally {
            dispatch(setLoading(false)); 
        }
    }
);

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
    'product/fetchProductsByCategory',
    async (category, { dispatch, getState, rejectWithValue }) => {
        const { limit, skip } = getState().product.pagination;
        dispatch(setLoading(true)); 
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`);
            dispatch(setProducts(response.data.products)); 
        } catch (error) {
            return rejectWithValue(error.message); 
        } finally {
            dispatch(setLoading(false)); 
        }
    }
);

// Fetch categories
export const fetchCategories = createAsyncThunk(
    'product/fetchCategories',
    async (_, { dispatch, rejectWithValue }) => {
        dispatch(setLoading(true)); 
        try {
            const response = await axios.get(`https://dummyjson.com/products/categories`);
            dispatch(setCategories(response.data.slice(0, 5))); 
        } catch (error) {
            return rejectWithValue(error.message); 
        } finally {
            dispatch(setLoading(false)); 
        }
    }
);


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = [...state.products, ...action.payload];
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.pagination.skip = 0;
            state.pagination.page = 1;
            state.products = []; 
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        incrementPage: (state) => {
            state.pagination.page += 1;
            state.pagination.skip = (state.pagination.page - 1) * state.pagination.limit;
        },
        resetProducts: (state) => {
            state.products = [];
        },
    },
});


export const { setProducts, setCategories, setSelectedCategory, setLoading, setError, incrementPage, resetProducts } = productSlice.actions;

export default productSlice.reducer;
