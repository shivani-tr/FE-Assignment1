
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import data from '../data/income.json';


const IncomeChart = ({ incomeStatement }) => {
  
  const incomeData = data[0];

  const chartData = {
    // labels: incomeStatement.annualReports?.map((report) => report.fiscalDateEnding),  //for redux
    labels: incomeData.fiscalDateEnding,  //for my own demo data
    datasets: [
      {
        label: 'Total Revenue',
        // data: incomeStatement.annualReports?.map((report) => report.totalRevenue),
        data: incomeData.totalRevenue, //this is for my own demo data
        backgroundColor: 'rgba(67, 56, 202, 0.2)',
        borderColor: 'rgba(67, 56, 202, 1)',
        borderWidth: 1,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Fiscal Year',
        },
        ticks: {
          display: false, 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Revenue (in USD)',
        },
        ticks: {
          display: false, 
        },
      },
    },
  };

  return (
    <div>
      <h2 className='text-2xl text-black/70 font-bold mb-3 mt-7'>Income Statement: </h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default IncomeChart;
