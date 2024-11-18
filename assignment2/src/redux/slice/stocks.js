import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTopGainersLosers } from '../../api/FetchData.js'; 

export const getTopGainersLosers = createAsyncThunk('stocks/getTopGainersLosers', async () => {
  const data = await fetchTopGainersLosers();
  return data; 
});

const initialState = {
  gainers: [],
  losers: [],
  loading: false,
  error: null
};


const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopGainersLosers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopGainersLosers.fulfilled, (state, action) => {
        state.loading = false;
        state.gainers = action.payload.topGainers;
        state.losers = action.payload.topLosers;
      })
      .addCase(getTopGainersLosers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default stocksSlice.reducer;
