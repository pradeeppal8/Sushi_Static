import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Facebook', 'YouTube', 'Amazon'],
  datasets: [{
    label: 'Traffic Source',
    data: [1000, 1200, 1500],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

function PieChart() {
  return <Pie data={data} />;
}

export default PieChart;
