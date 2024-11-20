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
