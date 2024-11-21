import React from 'react';
import {headerData} from "../data/demo.json"
const GainersTable = ({ gainers }) => { 


  if (!gainers || gainers.length === 0) return <p>No data available</p>;  

  return (
    <table className='h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-300 p-40 table-auto'> 
      <thead className='py-3 px-3'>
          <tr className='text-center text-sm text-black/70 font-semibold p-10'>
        {
          headerData.map((header) => (
              <th className='py-4 px-3 border border-gray-300 capitalize'>{header}</th>
          ))
        }
          </tr>
      </thead>
      <tbody>
        {gainers.slice(0,10).map((gainer) => (
          <tr key={gainer.ticker}>
            { headerData.map((header) => (
              <td className='text-left text-xs font-medium py-1 px-10 border border-gray-300 text-black/50'>{gainer[header]}</td>
            ))
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GainersTable;
