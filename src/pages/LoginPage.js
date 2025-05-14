import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { saveToken, saveUserRole } from '../services/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, password);
    if (response && response.token && response.role) {
      saveToken(response.token);
      saveUserRole(response.role);
      navigate(`/${response.role}`);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Hospital Management System - Login</h2>
      <form onSubmit={handleSubmit}>
        <div><input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /></div>
        <div><input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required /></div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;