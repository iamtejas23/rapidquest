// RoundedGraph.js
// RoundedGraph.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './GraphStyles.css';

const RoundedGraph = () => {
  const data = {
    titles: ['Age', 'Salary', 'Gender'],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ['#4CAF50', '#fff', '#fff'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.formattedValue;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="rounded-graph-container">
      <div className="chart-container-rond">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default RoundedGraph;
