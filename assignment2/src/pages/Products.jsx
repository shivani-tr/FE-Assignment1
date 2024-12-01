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
  setSelectedCategory,
  setUpdatingProduct 
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
  const category = searchParams.get("category");

  const categories = useSelector((state) => state.product.categories);
  const selectedCategory = useSelector(selectedCategorySelector);
  const products = useSelector(productsSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // when category changes
  useEffect(() => {
    if (category) {
      dispatch(setSelectedCategory(category));
      dispatch(fetchProductsByCategory(category));
    } else {
      dispatch(setSelectedCategory(null));
      dispatch(fetchAllProducts());
    }
  }, [category]);

 
  const handleCategoryChange = (newCategory) => {
    if (newCategory) {
      setSearchParams({ category: newCategory });
    } else {
      setSearchParams({}); 
    }
  };

  //handling edit or product updates
  const handleEdit = (product) => {
    dispatch(setUpdatingProduct(product));
  }

  return (
    <>
      <h1 className="text-indigo-700 text-3xl font-bold">Product Page</h1>
      <div>
        <TableButtons
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onEdit={handleEdit}
        />
        {selectedCategory ? (
          <>
            <Table data={products} header={header} isLink={false} />
            {loading && <div className="text-center">Loading...</div>}
          </>
        ) : (
          <InfiniteScroll>
            <Table data={products} header={header} isLink={false} onEdit={handleEdit} />
          </InfiniteScroll>
        )}
      </div>
    </>
  );
};

export default Products;
