
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PatientForm from './pages/PatientForm';
import PatientList from './pages/PatientList';
import AppointmentForm from './pages/AppointmentForm';
import AppointmentList from './pages/AppointmentList';
import StaffForm from './pages/StaffForm';
import StaffList from './pages/StaffList';
import MedicalRecordForm from './pages/MedicalRecordForm';
import MedicalRecordList from './pages/MedicalRecordList';
import BillingForm from './pages/BillingForm';
import BillingList from './pages/BillingList';
import MedicineForm from './pages/MedicineForm';
import MedicineList from './pages/MedicineList';
import PrescriptionForm from './pages/PrescriptionForm';
import PrescriptionList from './pages/PrescriptionList';
import LabTestForm from './pages/LabTestForm';
import LabTestList from './pages/LabTestList';
import LabResultForm from './pages/LabResultForm';
import PatientLabHistory from './pages/PatientLabHistory';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
<li><Link to="/user-management">User Management</Link></li>
            <li><Link to="/lab-request">Request Lab Test</Link></li>
            <li><Link to="/lab-tests">All Lab Tests</Link></li>
            <li><Link to="/record-lab-result">Record Lab Result</Link></li>
            <li><Link to="/patient-lab-history">Patient Lab History</Link></li>
            <li><Link to="/medicines">Medicine Inventory</Link></li>
            <li><Link to="/add-medicine">Add Medicine</Link></li>
            <li><Link to="/issue-prescription">Issue Prescription</Link></li>
            <li><Link to="/prescriptions">Patient Prescriptions</Link></li>
            <li><Link to="/billing">Billing List</Link></li>
            <li><Link to="/create-bill">Create Bill</Link></li>
            <li><Link to="/add-record">Add Medical Record</Link></li>
            <li><Link to="/view-records">View Medical Records</Link></li>
            <li><Link to="/staff">Staff List</Link></li>
            <li><Link to="/register-staff">Register Staff</Link></li>
            <li><Link to="/appointments">Appointment List</Link></li>
            <li><Link to="/book-appointment">Book Appointment</Link></li>
            <li><Link to="/patients">Patient List</Link></li>
            <li><Link to="/register">Register Patient</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/register" element={<PatientForm />} />
          <Route path="/appointments" element={<AppointmentList />} />
          <Route path="/book-appointment" element={<AppointmentForm />} />
          <Route path="/staff" element={<StaffList />} />
          <Route path="/register-staff" element={<StaffForm />} />
          <Route path="/add-record" element={<MedicalRecordForm />} />
          <Route path="/view-records" element={<MedicalRecordList />} />
          <Route path="/billing" element={<BillingList />} />
          <Route path="/create-bill" element={<BillingForm />} />
          <Route path="/medicines" element={<MedicineList />} />
          <Route path="/add-medicine" element={<MedicineForm />} />
          <Route path="/issue-prescription" element={<PrescriptionForm />} />
          <Route path="/prescriptions" element={<PrescriptionList />} />
          <Route path="/lab-request" element={<LabTestForm />} />
          <Route path="/lab-tests" element={<LabTestList />} />
          <Route path="/record-lab-result" element={<LabResultForm />} />
          <Route path="/patient-lab-history" element={<PatientLabHistory />} />
          <Route path="/user-management" element={<UserManagement />} />
</Routes>
      </div>
    </Router>
  );
}

export default App;
