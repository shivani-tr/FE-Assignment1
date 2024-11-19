import axios from 'axios';

const API_KEY = 'GG6JXPMBU10TPS5G'; 
const BASE_URL = 'https://www.alphavantage.co/query';

export const fetchTopGainersLosers = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TOP_GAINERS_LOSERS',
        apikey: API_KEY
      }
    });
    console.log(response.data); 
    const { metadata,  top_gainers, top_losers} = response.data;

    return {
      metadata,
     
      topGainers: top_gainers,
      topLosers: top_losers,
      
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
