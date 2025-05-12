import React, { useState } from 'react';
import Login from './pages/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = (userRole) => {
    setLoggedIn(true);
    setRole(userRole);
  };

  if (!loggedIn) return <Login onLogin={handleLogin} />;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Hospital Management System</h1>
      <p>Welcome, {role}!</p>
      <button onClick={() => window.location.reload()}>Log Out</button>
    </div>
  );
};

export default App;
