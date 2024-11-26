
import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts, incrementPage } from '../store/reducers/productSlice.js';
import ProductTable from "./core/ProductTable";

const InfiniteScroll = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const loading = useSelector((state) => state.product.loading);
    const pagination = useSelector((state) => state.product.pagination);

    const observerRef = useRef();

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch, pagination.page]);

    const loadMore = useCallback(() => {
        if (!loading) {
            dispatch(incrementPage());
        }
    }, [dispatch, loading]);

    const lastProductRef = useCallback(
        (node) => {
        if (loading) return;

        if (observerRef.current) observerRef.current.disconnect();
        observerRef.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
            }
        });
        if (node) observerRef.current.observe(node);
    },
        [loading, loadMore]
    );

    return (
        <div>
            <ProductTable productData={products} />
            <div ref={lastProductRef} className="text-xl font-bold text-black/30">
                {loading ? "Loading..." : ""}
            </div>
        </div>
    );
};

export default InfiniteScroll;
