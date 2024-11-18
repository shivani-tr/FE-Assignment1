import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopGainersLosers } from '../redux/slice/stocks.js'; 
import GainersTable from './GainersTable';
import LosersTable from './LosersTable';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { gainers, losers, loading, error } = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(getTopGainersLosers());
  }, [dispatch]);

  if (loading) return <p>Loading stock data...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div>
      <h1>Stock Market Dashboard</h1>
      
      <h2>Top Gainers</h2>
      <GainersTable gainers={gainers} /> 

      <h2>Top Losers</h2>
      <LosersTable losers={losers} /> 
    </div>
  );
};

export default Dashboard;
