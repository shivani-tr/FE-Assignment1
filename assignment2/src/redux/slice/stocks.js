import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTopGainersLosers } from '../../api/FetchData.js';

export const getTopGainersLosers = createAsyncThunk('stocks/getTopGainersLosers', async (_, { dispatch }) => {
  
  dispatch(setLoadingState(true));

  try {
    const data = await fetchTopGainersLosers();
    dispatch(setTopGainersLosers(data)); 
  } catch (error) {
    dispatch(setError(error)); 
  } finally {
    dispatch(setLoadingState(false));
  }
});

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

export const { setError, setLoadingState, setTopGainersLosers } = stocksSlice.actions;
export default stocksSlice.reducer;
