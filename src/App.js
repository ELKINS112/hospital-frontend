import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import axios from 'axios';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
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
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUserRole(null);
    setToken(null);
  };

  if (!isAuthenticated) return <Login onLogin={() => window.location.reload()} />;

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-4">
        <h2>Hospital Management System</h2>
        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
      </div>
      <p>Welcome, {userRole}!</p>
    </div>
  );
};

export default App;
