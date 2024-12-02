import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  categories: [],
  selectedCategory: null,
  pagination: { limit: 15, skip: 0, page: 1 },
  loading: false,
  error: null,
  updatingProduct: null, // Prefill
};

// Fetch all products
export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async (_, { dispatch, getState, rejectWithValue }) => {
    const { limit, skip } = getState().product.pagination;
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      dispatch(setProducts(response.data.products));
    } catch (error) {
      dispatch(setError(error.message));
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
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
      );
      dispatch(setProducts(response.data.products));
    } catch (error) {
      dispatch(setError(error.message));
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
      const response = await axios.get(
        'https://dummyjson.com/products/categories'
      );
      dispatch(setCategories(response.data.slice(0, 5)));
    } catch (error) {
      dispatch(setError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);

// Update product (PUT)
export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async ({ productId, updatedData }, { dispatch, rejectWithValue }) => {
    try {

      const response = await axios.put(
        `https://dummyjson.com/products/${productId}`, 
        JSON.stringify(updatedData) // for updatedData 
      );
      
      dispatch(setUpdatingProduct(response.data, getState));
      return response.data; 
    } catch (error) {
      dispatch(setError(error.message)); 
      return rejectWithValue(error.message);
    }
  }
);

// Add a new product (POST)
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (productData, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        'https://dummyjson.com/products/add',
        productData
      );
      
      dispatch(setAddedProduct(response.data));
    } catch (error) {
      dispatch(setError(error.message)); 
      return rejectWithValue(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  }
);



// Slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.products = [...action.payload];
      } else {
        state.products.push(action.payload);
      }
    },

    setAddedProduct: (state, action) => {
        // state.products = [...state.products, action.payload];
        state.updatingProduct = action.payload;
        state.products = [...state.products, state.updatingProduct];
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
    setUpdatingProduct: (state, action) => {
        state.updatingProduct = action.payload;
      
        if (action.payload) {
          const index = state.products.findIndex((pro) => pro.id === action.payload.id);
          if (index !== -1) {
            state.products[index] = {
              ...state.products[index],
              ...action.payload,
            };
          }
        }
      },
      
  },
});

export const {
  setProducts,
  addProductToState,
  setCategories,
  setSelectedCategory,
  setLoading,
  setError,
  incrementPage,
  resetProducts,
  setAddedProduct,
  setUpdatingProduct,
  setProductData, 
} = productSlice.actions;

export default productSlice.reducer;
