import React, { useEffect } from "react";
import { header } from "../data/product.json";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/core/Table.jsx";
import InfiniteScroll from "../components/core/InfiniteScroll.jsx";
import { fetchAllProducts, fetchCategories, fetchProductsByCategory, setSelectedCategory } from "../store/reducers/productSlice.js";
import { selectedCategorySelector, productsSelector, loadingSelector } from "../store/selectors/ProductsSelectors.js";
import TableButtons from "../components/products/TableButtons.jsx";

const Products = () => {
  const dispatch = useDispatch();
  // const selectedCategory = useSelector((state) => state.product.selectedCategory);
  // const products = useSelector((state) => state.product.products);
  // const loading = useSelector((state) => state.product.loading);

  const selectedCategory = useSelector(selectedCategorySelector);
  const products = useSelector(productsSelector);
  const loading = useSelector(loadingSelector);
  useEffect(() => {
    dispatch(fetchCategories()); 
    // console.log(selectedCategory)
  
    if (!selectedCategory) {
      dispatch(fetchAllProducts());
    } else {
      dispatch(fetchProductsByCategory(selectedCategory)); 
    }
  }, [selectedCategory]); 
  

  return (
    <>
      <h1 className="text-indigo-700 text-3xl font-bold">Product Page</h1>
      <div>
        <TableButtons />
              {selectedCategory ? (
        <>
          <Table data={products} header={header} isLink={false} />
          {loading && <div className="text-center">Loading...</div>}
        </>
      ) : (
        <InfiniteScroll>
          <Table data={products} header={header} isLink={false} />
        </InfiniteScroll>
      )}

      </div>
    </>
  );
};

export default Products;
