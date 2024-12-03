import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { header } from "../data/product.json";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/core/Table.jsx";
import InfiniteScroll from "../components/core/InfiniteScroll.jsx";
import TableButtons from "../components/products/TableButtons.jsx";
// import ProductForm from "../components/core/ProductForm.jsx";
import Modal from "../components/products/Modal.jsx"; 
import {
  fetchAllProducts,
  fetchCategories,
  fetchProductsByCategory,
  setSelectedCategory,
  setUpdatingProduct,
  setAddedProduct,
  updateProduct,
  addProduct
} from "../store/reducers/productSlice.js";
import {
  selectedCategorySelector,
  productsSelector,
  loadingSelector,
} from "../store/selectors/ProductsSelectors.js";

const Products = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  const categories = useSelector((state) => state.product.categories);
  const selectedCategory = useSelector(selectedCategorySelector);
  const products = useSelector(productsSelector);
  const loading = useSelector(loadingSelector);
  const updatingProduct = useSelector((state) => state.product.updatingProduct);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false); 
  

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Fetch products based on category changes
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

  const handleEdit = (product) => {
    dispatch(setUpdatingProduct(product));
    setModalOpen(true);
  };

  const handleAddProduct = () => {
    dispatch(setUpdatingProduct(null)); // Clear existing product data
    setIsAdding(true); 
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    dispatch(setUpdatingProduct(null));
  };

  const handleFormSubmit = (updatedProduct) => {
    if (isAdding) {
      // Add a new product
      dispatch(addProduct(updatedProduct));
    } else {
      // Update an existing product
      dispatch(updateProduct({ productId: updatingProduct.id, updatedData: updatedProduct }));
      // console.log("Updated Product:", updatedProduct);
      // console.log('Submitting update for product with ID:', updatingProduct.id); // Log product ID
    }
    setModalOpen(false);
  };
  
  

  return (
    <>
      <h1 className="text-indigo-700 text-3xl font-bold">Product Page</h1>
      <div>
        <TableButtons
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onAddProduct={handleAddProduct} 
        />
        {selectedCategory ? (
          <>
            <Table
              data={products}
              header={header}
              isLink={false}
              onEdit={handleEdit}
            />
            {loading && <div className="text-center">Loading...</div>}
          </>
        ) : (
          <InfiniteScroll>
            <Table
              data={products}
              header={header}
              isLink={false}
              onEdit={handleEdit}
            />
          </InfiniteScroll>
        )}
      </div>

      {/* Edit/add Product Modal */}
      {isModalOpen && (
      <Modal
      initialData={isAdding ? {} : updatingProduct} 
      onSubmit={handleFormSubmit}
      onClose={handleModalClose}
      />
)}

    </>
  );
};

export default Products;
