
import React from "react";

const ProductTable = ({ productData }) => {
    if (!productData || productData.length === 0) return <p>No data available</p>;

    const headers = ["title", "category", "price", "rating", "stock"];

    return (
        <table className="w-full bg-gray-700 rounded-md  bg-opacity-10 ">
            <thead>
                <tr className="text-left text-sm text-black/70  font-semibold">
                    {headers.map((header) => (
                        <th key={header} className="py-4 px-10 border border-gray-300 capitalize">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {productData.map((product) => (
                    <tr key={product.id}>
                        {headers.map((header) => (
                            <td key={`${product.id}-${header}`} className="text-left text-xs font-medium py-4 px-10 border border-gray-300 text-black/50">
                                {product[header]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
