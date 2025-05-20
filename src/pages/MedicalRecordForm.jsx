
import React, { useState } from 'react';
import { addMedicalRecord } from '../services/medicalRecordService';

const MedicalRecordForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    visit_date: '',
    diagnosis: '',
    treatment: '',
    notes: '',
    attachment_url: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicalRecord(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Medical Record</h2>
      <input name="patient_id" placeholder="Patient ID" onChange={handleChange} required />
      <input name="doctor_id" placeholder="Doctor ID" onChange={handleChange} required />
      <input name="visit_date" type="date" onChange={handleChange} required />
      <textarea name="diagnosis" placeholder="Diagnosis" onChange={handleChange}></textarea>
      <textarea name="treatment" placeholder="Treatment" onChange={handleChange}></textarea>
      <textarea name="notes" placeholder="Notes" onChange={handleChange}></textarea>
      <input name="attachment_url" placeholder="Attachment URL (optional)" onChange={handleChange} />
      <button type="submit">Save Record</button>
    </form>
  );
};

export default MedicalRecordForm;
