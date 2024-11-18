import React from 'react';

const GainersTable = ({ gainers }) => { // Accept `gainers` prop here

  if (!gainers || gainers.length === 0) return <p>No data available</p>;  

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
        {gainers.map((gainer) => (
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
