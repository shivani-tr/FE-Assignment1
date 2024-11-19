import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopGainersLosers } from '../store/selectors/stocks.js'; 
import { gainersSelector, losersSelector } from '../selectors/StocksSelectors.js';
import GainersTable from './GainersTable';
import LosersTable from './LosersTable';
import data from '../data/demo.json'; // for my own demo data

const Dashboard = () => {
  const dispatch = useDispatch();
  // const { gainers, losers, loading, error } = useSelector((state) => state.stocks);
  const gainers = useSelector(gainersSelector);
  const losers = useSelector(losersSelector);


  useEffect(() => {
    dispatch(getTopGainersLosers());
  }, []);

  if (loading) return <p>Loading stock data...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div className='flex justify-between items-center '>
     <div className='flex flex-col justify-center items-center mr-10'>
        <h2 className='text-3xl font-semi-bold text-lime-600 mb-7'>Top Gainers</h2>
        <GainersTable gainers={data.top_gainers} />   {/* gainers = {gainers}*/}
     </div>
     <div className='flex flex-col justify-center items-center ml-10'>
        <h2 className='text-3xl font-semi-bold text-red-700 mb-7'>Top Losers</h2>
        <LosersTable losers={data.top_losers} />  {/* losers = {losers}*/}
     </div> 
    </div>
  );
};

export default Dashboard;
