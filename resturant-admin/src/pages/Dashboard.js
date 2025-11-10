import React from 'react';
import StatCard from '../components/StatCard';
import { FaEye, FaShoppingCart, FaComment, FaMoneyBill } from 'react-icons/fa';
// import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

function Dashboard () {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatCard icon={<FaEye />} value="1,504" label="Daily Views" />
        <StatCard icon={<FaShoppingCart />} value="80" label="Sales" />
        <StatCard icon={<FaComment />} value="284" label="Comments" />
        <StatCard icon={<FaMoneyBill />} value="$7,842" label="Earnings" />
      </div>
      <div className="charts">
        {/* <div className="chart"><PieChart /></div> */}
        <div className="chart"><BarChart /></div>
      </div>
    </div>
  );
}

export default Dashboard;
