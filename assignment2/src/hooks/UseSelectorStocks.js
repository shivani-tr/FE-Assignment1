import { useSelector } from 'react-redux';



export const useGainers = () => {
  return useSelector((state) => state.stocks.gainers);
};

export const useLosers = () => {
  return useSelector((state) => state.stocks.losers);
};

export const useLoading = () => {
  return useSelector((state) => state.stocks.loading);
};

export const useError = () => {
  return useSelector((state) => state.stocks.error);
};

export const useStocks = () => {
    return useSelector((state) => state.stocks);
  };