import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTopGainersLosers } from '../../api/FetchData.js';

const initialState = {
  gainers: [],
  losers: [],
  loading: false,
  error: null,
};

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload; 
    },
    setTopGainersLosers: (state, action) => {
      state.gainers = action.payload.topGainers;
      state.losers = action.payload.topLosers;
    },
  },
});

export const getTopGainersLosers = createAsyncThunk('stocks/getTopGainersLosers', async (_, { dispatch }) => {
  
    dispatch(setLoadingState(true));
    const data = await fetchTopGainersLosers();
    dispatch(setTopGainersLosers(data)); 
    dispatch(setLoadingState(false));
  
});

export const { setError, setLoadingState, setTopGainersLosers } = stocksSlice.actions;
export default stocksSlice.reducer;
