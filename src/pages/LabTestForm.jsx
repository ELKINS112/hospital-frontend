
import React, { useState } from 'react';
import { requestLabTest } from '../services/labService';

const LabTestForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    test_type: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestLabTest(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Lab Test</h2>
      <input name="patient_id" placeholder="Patient ID" onChange={handleChange} required />
      <input name="doctor_id" placeholder="Doctor ID" onChange={handleChange} required />
      <input name="test_type" placeholder="Test Type" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LabTestForm;
