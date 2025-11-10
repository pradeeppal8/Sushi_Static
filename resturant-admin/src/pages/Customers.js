import React from 'react';
// import './Notifications.scss';

function Customers () {
  return (
    <div className="notifications-page">
      <h2>Notifications</h2>
      <div className="notification-card">
        <p>There are no notifications at the moment</p>
      </div>
      <footer>© Sushi Resturant {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Customers;
