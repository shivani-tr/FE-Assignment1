import React from 'react';
import { useSelector } from 'react-redux';

const LosersTable = () => {
  const { topLosers, loading, error } = useSelector((state) => state.stocks);  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!topLosers || topLosers.length === 0) return <p>No data available</p>;  

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
        {topLosers.map((loser) => (
          <tr key={loser.ticker}>
            <td>{loser.ticker}</td>
            <td>${loser.price}</td> 
            <td>{loser.change_amount}</td>
            <td>{loser.change_percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LosersTable;
