import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import axios from 'axios';

const App = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
      decodeTokenRole(storedToken);
    }
  }, []);

  const decodeTokenRole = (jwt) => {
    const payload = JSON.parse(atob(jwt.split('.')[1]));
    setUserRole(payload.role);
    setActiveTab(payload.role);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserRole(null);
    setToken(null);
  };

  if (!isAuthenticated) return <Login onLogin={() => window.location.reload()} />;

  const dashboards = {
    admin: (
      <div className="row">
        <div className="col-md-4"><div className="card bg-primary text-white mb-3"><div className="card-body"><h5>Total Users</h5><p className="display-6">25</p></div></div></div>
        <div className="col-md-4"><div className="card bg-success text-white mb-3"><div className="card-body"><h5>Inventory</h5><p className="display-6">340</p></div></div></div>
        <div className="col-md-4"><div className="card bg-warning text-dark mb-3"><div className="card-body"><h5>Invoices</h5><p className="display-6">120</p></div></div></div>
      </div>
    ),
    doctor: (
      <table className="table">
        <thead><tr><th>Patient</th><th>Date</th><th>Time</th><th>Condition</th></tr></thead>
        <tbody><tr><td>Jane Doe</td><td>2025-05-10</td><td>10:00 AM</td><td>Fever</td></tr></tbody>
      </table>
    ),
    pharmacist: (
      <table className="table">
        <thead><tr><th>Item</th><th>Qty</th><th>Price</th></tr></thead>
        <tbody><tr><td>Ibuprofen</td><td>60</td><td>₦180</td></tr></tbody>
      </table>
    ),
    accountant: (
      <table className="table">
        <thead><tr><th>Invoice</th><th>Patient</th><th>Amount</th><th>Date</th></tr></thead>
        <tbody><tr><td>INV001</td><td>Jane Doe</td><td>₦7500</td><td>2025-05-10</td></tr></tbody>
      </table>
    ),
    lab: (
      <table className="table">
        <thead><tr><th>Test</th><th>Result</th><th>Status</th></tr></thead>
        <tbody><tr><td>Malaria</td><td>Negative</td><td>Verified</td></tr></tbody>
      </table>
    ),
    nurse: (
      <div>
        <h5>Today's Appointments</h5>
        <ul>
          <li>8:00 AM – Jane Doe – Checkup</li>
          <li>9:30 AM – John Smith – Fever</li>
        </ul>
      </div>
    ),
    patient: (
      <div className="card">
        <div className="card-body">
          <h5>Jane Doe</h5>
          <p>Age: 29</p>
          <p>Gender: Female</p>
          <p>Last Visit: 2025-05-10</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-4">
        <h2>Hospital Management System</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
      </div>
      <ul className="nav nav-tabs">
        {[userRole].map(tab => (
          <li className="nav-item" key={tab}>
            <button className={`nav-link active`} onClick={() => setActiveTab(tab)}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-3">
        {dashboards[activeTab]}
      </div>
    </div>
  );
};

export default App;
