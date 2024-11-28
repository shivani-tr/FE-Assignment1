import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { header } from "../data/product.json";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/core/Table.jsx";
import InfiniteScroll from "../components/core/InfiniteScroll.jsx";
import { 
  fetchAllProducts, 
  fetchCategories, 
  fetchProductsByCategory, 
  setSelectedCategory 
} from "../store/reducers/productSlice.js";
import { 
  selectedCategorySelector, 
  productsSelector, 
  loadingSelector 
} from "../store/selectors/ProductsSelectors.js";
import TableButtons from "../components/products/TableButtons.jsx";

const Products = () => {
  const dispatch = useDispatch();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category'); // Get the category from URL

  const selectedCategory = useSelector(selectedCategorySelector);
  const products = useSelector(productsSelector);
  const loading = useSelector(loadingSelector);

  // when the component mounts
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // Update state and fetch products when category changes
  useEffect(() => {
    if (category) {
      dispatch(setSelectedCategory(category));
      dispatch(fetchProductsByCategory(category));
    } else {
      dispatch(setSelectedCategory(null));
      dispatch(fetchAllProducts());
    }
  }, [category]);

  // Update URL query parameters dynamically based on selection
  const handleCategoryChange = (newCategory) => {
    if (newCategory) {
      setSearchParams({ category: newCategory }); 
      dispatch(setSelectedCategory(newCategory)); 
      dispatch(fetchProductsByCategory(newCategory)); 
    } else {
      setSearchParams({}); 
      dispatch(setSelectedCategory(null)); 
      dispatch(fetchAllProducts()); 
    }
  };

  return (
    <>
      <h1 className="text-indigo-700 text-3xl font-bold">Product Page</h1>
      <div>
        <TableButtons onCategoryChange={handleCategoryChange} />
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
