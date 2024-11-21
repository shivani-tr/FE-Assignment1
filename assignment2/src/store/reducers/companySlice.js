
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    companyOverview: {},
    incomeStatement: {},
  };

  const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
      setCompanyOverview: (state, action) => {
        state.companyOverview = action.payload;
      },
      setIncomeStatement: (state, action) => {
        state.incomeStatement = action.payload;
      },
    },
  });

export const fetchCompanyOverview = (ticker) => async (dispatch) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'OVERVIEW',
        symbol: ticker,
        apikey: 'C1LCXM862OHRC01U',
      },
    });
    dispatch(setCompanyOverview(response.data)); 
  } catch (error) {
    console.error('Error fetching company overview:', error);
  }
};

export const fetchIncomeStatement = (ticker) => async (dispatch) => {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'INCOME_STATEMENT',
        symbol: ticker,
        apikey: 'C1LCXM862OHRC01U',
      },
    });
    dispatch(setIncomeStatement(response.data)); 
  } catch (error) {
    console.error('Error fetching income statement:', error);
  }
};




export const { setCompanyOverview, setIncomeStatement } = companySlice.actions;
export default companySlice.reducer;
