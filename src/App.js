import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import NurseDashboard from './pages/NurseDashboard';
import LabDashboard from './pages/LabDashboard';
import PharmacistDashboard from './pages/PharmacistDashboard';
import AccountantDashboard from './pages/AccountantDashboard';
import PatientDashboard from './pages/PatientDashboard';
import { getUserRole } from './services/auth';

function App() {
  const role = getUserRole();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
        <Route path="/doctor" element={role === 'doctor' ? <DoctorDashboard /> : <Navigate to="/" />} />
        <Route path="/nurse" element={role === 'nurse' ? <NurseDashboard /> : <Navigate to="/" />} />
        <Route path="/lab" element={role === 'lab' ? <LabDashboard /> : <Navigate to="/" />} />
        <Route path="/pharmacist" element={role === 'pharmacist' ? <PharmacistDashboard /> : <Navigate to="/" />} />
        <Route path="/accountant" element={role === 'accountant' ? <AccountantDashboard /> : <Navigate to="/" />} />
        <Route path="/patient" element={role === 'patient' ? <PatientDashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;