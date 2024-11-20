
import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const IncomeChart = ({ incomeStatement }) => {
  
  const chartData = {
    labels: incomeStatement.annualReports?.map((report) => report.fiscalDateEnding),
    datasets: [
      {
        label: 'Total Revenue',
        data: incomeStatement.annualReports?.map((report) => report.totalRevenue),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Income Statement: Total Revenue',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Fiscal Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Revenue (in USD)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Income Statement Bar Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default IncomeChart;
