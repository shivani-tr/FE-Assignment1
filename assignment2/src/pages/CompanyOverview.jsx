import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanyOverview, fetchIncomeStatement } from '../store/reducers/companySlice';
import { useParams } from 'react-router-dom';
import IncomeChart from '../components/IncomeChart'; 

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

  return (
    <div>
      <h1>Company Overview for {ticker} </h1>

     
      {companyOverview && Object.keys(companyOverview).length > 0 ? (
        <div>
          <h2>{companyOverview.Name}</h2>
          <p><strong>Description:</strong> {companyOverview.Description}</p>
          <p><strong>Exchange:</strong> {companyOverview.Exchange}</p>
          <p><strong>Country:</strong> {companyOverview.Country}</p>
          <p><strong>Industry:</strong> {companyOverview.Industry}</p>
        </div>
      ) : (
        <p>Loading company details...</p>
      )}

     
      {incomeStatement && incomeStatement.annualReports ? (
        <IncomeChart incomeStatement={incomeStatement} />
      ) : (
        <p>Loading income statement...</p>
      )}
    </div>
  );
};

export default CompanyOverview;
