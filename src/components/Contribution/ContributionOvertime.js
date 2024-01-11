// ContributionOvertime.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { LinearScale, CategoryScale, Chart, BarController, BarElement } from 'chart.js'; // Explicitly import Chart and Bar components
import './ContributionOvertime.css';

Chart.register(LinearScale, CategoryScale, BarController, BarElement); // Register the necessary components



const ContributionOvertime = () => {
  const data = {
    labels: ['20', '25', '30', '35', '40', '60', '65'],
    datasets: [
      {
        label: 'Contributions',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [50, 60,80, 100, 200, 250, 300],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="contribution-overtime">
      <h6>Contribution Overtime</h6>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ContributionOvertime;
