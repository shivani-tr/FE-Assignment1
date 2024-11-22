import { createSelector } from '@reduxjs/toolkit';

export const gainersLosersStore = (store) => store.stocks;

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
    gainersLosersStore, 
    (companySlice) => companySlice.companyOverview
)

export const incomeSelector = createSelector(
    gainersLosersStore, 
    (companySlice) => companySlice.incomeStatement
)


// const companyOverview = useSelector((state) => state.company.companyOverview);
// const incomeStatement = useSelector((state) => state.company.incomeStatement);