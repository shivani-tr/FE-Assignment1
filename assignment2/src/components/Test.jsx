import React, { useEffect, useState } from 'react';
import { fetchTopGainersLosers } from '../api/FetchData.js';

const Test = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTopGainersLosers();
        setStockData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h1>Stock Market Data</h1>
      
      <h2>Top Gainers</h2>
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
          {stockData.topGainers.map((gainer) => (
            <tr key={gainer.ticker}>
              <td>{gainer.ticker}</td>
              <td>${gainer.price}</td>
              <td>+{gainer.change_amount}</td>
              <td>{gainer.change_percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Top Losers</h2>
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
          {stockData.topLosers.map((loser) => (
            <tr key={loser.ticker}>
              <td>{loser.ticker}</td>
              <td>${loser.price}</td>
              <td>{loser.change_amount}</td>
              <td>{loser.change_percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Test;




