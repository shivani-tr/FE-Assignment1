import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Table = ({ data, header, isLink, onEdit }) => {
  if (!data || data.length === 0) return <p>No data available</p>;

  return (
    <table className="w-full bg-gray-700 rounded-md bg-opacity-10">
      <thead>
        <tr className="text-left text-sm text-black/70 font-semibold">
          {header.map((headerItem) => (
            <th key={headerItem} className="py-4 px-7 border border-gray-300 capitalize">
              {headerItem}
            </th>
          ))}
          {!isLink && (
            <th className="py-4 px-7 border border-gray-300 capitalize">Edit</th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem) =>
          isLink ? (
            <tr key={dataItem.ticker}>
              {header.map((headerItem) => (
                <td
                  key={`${dataItem.ticker}-${headerItem}`}
                  className="text-left text-xs font-medium py-3 px-7 border border-gray-300 text-black/50"
                >
                  <Link to={`/company/${dataItem.ticker}`}>
                    {dataItem[headerItem]}
                  </Link>
                </td>
              ))}
            </tr>
          ) : (
            <tr key={dataItem.id}>
              {header.map((headerItem) => (
                <td
                  key={`${dataItem.id}-${headerItem}`}
                  className="text-left text-xs font-medium py-4 px-10 border border-gray-300 text-black/50"
                >
                  {dataItem[headerItem]}
                </td>
              ))}
              <td className="text-center py-4 px-7 border border-gray-300">
                <button
                  onClick={() => onEdit(dataItem)} 
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <Modal /> {/* Ensure Modal is configured properly */}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
