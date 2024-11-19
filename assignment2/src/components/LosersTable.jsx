import React from 'react';

const LosersTable = ({ losers }) => { 

  if (!losers || losers.length === 0) return <p>No data available</p>;

  return (
    <table className='h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-40 table-auto'>
      <thead className='py-3 px-3'>
        <tr className='text-left text-sm font-semibold p-10'>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change Amount</th>
          <th>Change Percentage</th>
        </tr>
      </thead>
      <tbody>
        {losers.slice(0,10).map((loser) => (
          <tr key={loser.ticker}>
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-gray-700'>{loser.ticker}</td>
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-gray-700'>${loser.price}</td> 
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-gray-700'>{loser.change_amount}</td>
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-gray-700'>{loser.change_percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LosersTable;
