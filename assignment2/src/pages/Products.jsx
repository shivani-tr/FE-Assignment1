import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductTable from "../components/core/ProductTable";
import InfiniteScroll from "../components/InfiniteScroll.jsx";
import { fetchAllProducts, fetchCategories, setSelectedCategory, fetchProductsByCategory, incrementPage } from "../store/reducers/productSlice.js";
import TableButtons from "../components/core/TableButtons.jsx";

const Products = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.product.selectedCategory);
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    
    dispatch(fetchCategories());
    
    
    if (!selectedCategory) {
      dispatch(fetchAllProducts());
    } else {
      dispatch(fetchProductsByCategory(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  return (
    <>
      <h1 className="text-indigo-700 text-3xl font-bold">Product Page</h1>
      <div>
        <TableButtons />
        
        {selectedCategory ? (
          <ProductTable productData={products} />
        ) : (
          <InfiniteScroll>
            <ProductTable productData={products} />
            {loading && <div className="text-center">Loading...</div>}
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Products;
