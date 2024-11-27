import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts, incrementPage } from "../store/reducers/productSlice.js";

const InfiniteScroll = ({ children }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const pagination = useSelector((state) => state.product.pagination);

  const observerRef = useRef();

  const loadMore = useCallback(() => {
    if (!loading) {
      dispatch(incrementPage());
      dispatch(fetchAllProducts()); // Fetch new products after increment
    }
  }, [dispatch, loading]);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;

      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        console.log('Observer entries:', entries); // Debug observer
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading, loadMore]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      {children}
      <div ref={lastElementRef} className="text-xl font-bold text-black/30">
        {loading && "Loading..."}
      </div>
    </div>
  );
};

export default InfiniteScroll;
