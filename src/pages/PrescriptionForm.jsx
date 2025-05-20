
import React, { useState } from 'react';
import { issuePrescription } from '../services/pharmacyService';

const PrescriptionForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    medicine_name: '',
    dosage: '',
    quantity_issued: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    issuePrescription(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Issue Prescription</h2>
      <input name="patient_id" placeholder="Patient ID" onChange={handleChange} required />
      <input name="doctor_id" placeholder="Doctor ID" onChange={handleChange} required />
      <input name="medicine_name" placeholder="Medicine Name" onChange={handleChange} required />
      <input name="dosage" placeholder="Dosage" onChange={handleChange} />
      <input name="quantity_issued" type="number" placeholder="Quantity" onChange={handleChange} required />
      <button type="submit">Issue</button>
    </form>
  );
};

export default PrescriptionForm;
