import { createSelector } from '@reduxjs/toolkit';

export const gainersLosersStore = (store) => store.stocks;
export const companyIncome = (store) => store.company;

export const gainersSelector = createSelector(
    gainersLosersStore,
    (stocksSlice) => stocksSlice.gainers
);

export const losersSelector = createSelector(
    gainersLosersStore,
    (stocksSlice) => stocksSlice.losers
);

export const loadingSelector = createSelector(
    gainersLosersStore, 
    (stocksSlice) => stocksSlice.loading
)

export const errorSelector = createSelector(
    gainersLosersStore, 
    (stocksSlice) => stocksSlice.error
)

export const companySelector = createSelector(
    companyIncome, 
    (companySlice) => companySlice.companyOverview
)

export const incomeSelector = createSelector(
    companyIncome, 
    (companySlice) => companySlice.incomeStatement
)


// const companyOverview = useSelector((state) => state.company.companyOverview);
// const incomeStatement = useSelector((state) => state.company.incomeStatement);