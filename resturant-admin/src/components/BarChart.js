
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Earning',
      data: [4000, 3000, 5000, 6000, 4000, 3000, 7000, 5000, 6000, 4000, 3000, 5000],
      backgroundColor: '#0A2519'
    }
  ]
};

function BarChart() {
  return <Bar data={data} />;
}

export default BarChart;
