import { createSelector } from "@reduxjs/toolkit";

export const productsStore = (store) => store.product;

export const selectedCategorySelector = createSelector(
    productsStore,
    (productSlice) => productSlice.selectedCategory
)

export const productsSelector = createSelector(
    productsStore,
    (productsSlice) => productsSlice.products
)

export const loadingSelector = createSelector(
    productsStore,
    (productSlice) => productSlice.loading
)



//   const selectedCategory = useSelector((state) => state.product.selectedCategory);
//   const products = useSelector((state) => state.product.products);
//   const loading = useSelector((state) => state.product.loading);
