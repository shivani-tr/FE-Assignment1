import React from 'react';
import { useSelector } from 'react-redux';

const GainersTable = () => {
  const { topGainers, loading, error } = useSelector((state) => state.stocks);  

  // Check if topGainers is undefined or null
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!topGainers || topGainers.length === 0) return <p>No data available</p>;  

  return (
    <table>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change Amount</th>
          <th>Change Percentage</th>
        </tr>
      </thead>
      <tbody>
        {topGainers.map((gainer) => (
          <tr key={gainer.ticker}>
            <td>{gainer.ticker}</td>
            <td>${gainer.price}</td> 
            <td>{gainer.change_amount}</td>
            <td>{gainer.change_percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GainersTable;
