
import React, { useState } from 'react';
import { registerPatient } from '../services/patientService';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    phone: '',
    address: '',
    emergency_contact: '',
    blood_type: '',
    category: 'outpatient',
    medical_history: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerPatient(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Patient</h2>
      <input name="full_name" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <input name="dob" type="date" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="emergency_contact" placeholder="Emergency Contact" onChange={handleChange} />
      <input name="blood_type" placeholder="Blood Type" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option value="outpatient">Outpatient</option>
        <option value="inpatient">Inpatient</option>
      </select>
      <textarea name="medical_history" placeholder="Medical History" onChange={handleChange}></textarea>
      <button type="submit">Register</button>
    </form>
  );
};

export default PatientForm;
