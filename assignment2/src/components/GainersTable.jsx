import React from 'react';

const GainersTable = ({ gainers }) => { 

  if (!gainers || gainers.length === 0) return <p>No data available</p>;  

  return (
    <table className='h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-300 p-40 table-auto'> 
      <thead className='py-3 px-3'>
        <tr className='text-center text-sm text-black/70 font-semibold p-10'>
          <th className='py-4 px-3 border border-gray-300'>Ticker</th>
          <th className='py-4 px-3 border border-gray-300'>Price</th>
          <th className='py-4 px-3 border border-gray-300'>Change Amount</th>
          <th className='py-4 px-3 border border-gray-300'>Change Percentage</th>
        </tr>
      </thead>
      <tbody>
        {gainers.slice(0,10).map((gainer) => (
          <tr key={gainer.ticker}>
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-black/50'>{gainer.ticker}</td>
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-black/50'>${gainer.price}</td> 
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-black/50'>{gainer.change_amount}</td>
            <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-black/50'>{gainer.change_percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GainersTable;
