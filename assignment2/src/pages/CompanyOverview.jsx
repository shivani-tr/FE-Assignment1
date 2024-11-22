import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyOverview, fetchIncomeStatement } from '../store/reducers/companySlice';
import { useParams } from 'react-router-dom';
import IncomeChart from '../components/IncomeChart'; 
import companyData from '../data/company.json';
import incomeData from '../data/income.json';

const CompanyOverview = () => {
  const dispatch = useDispatch();
  const { ticker } = useParams();

 
  const companyOverview = useSelector((state) => state.company.companyOverview);
  const incomeStatement = useSelector((state) => state.company.incomeStatement);

  
  useEffect(() => {
    if (ticker) {
      dispatch(fetchCompanyOverview(ticker));
      dispatch(fetchIncomeStatement(ticker));
    }
  }, [dispatch, ticker]);

  const company = companyData[0];  //just for my demo data
  const income = incomeData[0]; // judt for my own demo data

  return (
    <div className='text-left'>
      <h1 className='text-2xl text-black/70 font-bold mb-3 mt-4'>Company Overview for :  </h1>    {/*{ticker} */}

     
      {company && Object.keys(company).length > 0 ? (
        <div className='p-10 border border-gray-500/50 rounded-lg drop-shadow-md'>
          <h2 className='text-5xl text-indigo-700 text-bold mt-1 mb-2'>{company.Name}</h2>
          <p className='text-lg font-semi-bold text-black/50'><span className='text-lg font-bold text-black/70'>Description:</span> {company.Description}</p>            {/* {companyOverview.Description} */}
          <p className='text-lg font-bold text-red-700/70'><span className='text-lg font-bold text-black/70'>Exchange:</span> {company.Exchange}</p>
          <p className='text-lg font-bold text-blue-700/70'><span className='text-lg font-bold text-black/70'>Country:</span> {company.Country}</p>
          <p className='text-lg font-bold text-green-700/70'><span className='text-lg font-bold text-black/70'>Industry:</span> {company.Industry}</p>
        </div>
      ) : (
        <p>Loading company details...</p>
      )}

{/*      // redux slice
      {incomeStatement && incomeStatement.annualReports ? (
        <IncomeChart incomeStatement={incomeStatement} />    
      ) : (
        <p>Loading income statement...</p>
      )} */}

      {/* fetching data from my own income.json */}
      <IncomeChart incomeStatement={income} />
    </div>
  );
};

export default CompanyOverview;


//CompanyOverview page that is opened when you click on a company in the dashboard, it uses income-bar chart componnet