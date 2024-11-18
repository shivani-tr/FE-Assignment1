import React from 'react';

const LosersTable = ({ losers }) => { // Accept `losers` prop here

  if (!losers || losers.length === 0) return <p>No data available</p>;

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
        {losers.map((loser) => (
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
