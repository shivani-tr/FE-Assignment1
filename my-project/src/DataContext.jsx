// DataContext.js
import React, { createContext, useContext } from 'react';
import dataInfo from './data.json';

const DataContext = createContext();    // a context obj DataContext is created using createContext(), to ensure dataSharing without passing props

export const DataProvider = ({ children }) => {
  const pageOneData = dataInfo.pageOne;
  const pageTwoData = dataInfo.pageTwo;

  return (
    <DataContext.Provider value={{ pageOneData, pageTwoData }}>    {/* Provider component,value tells what data can be accessed */}
      {children}         {/* the wrapped components that can access data */}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);  //this custom hook allows any component to access "pageOneData" & "pageTwoData" directly
