
import React, { useState } from 'react';
import { createAppointment } from '../services/appointmentService';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    appointment_date: '',
    appointment_time: '',
    appointment_type: 'online'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createAppointment(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input name="patient_id" placeholder="Patient ID" onChange={handleChange} required />
      <input name="doctor_id" placeholder="Doctor ID" onChange={handleChange} required />
      <input name="appointment_date" type="date" onChange={handleChange} required />
      <input name="appointment_time" type="time" onChange={handleChange} required />
      <select name="appointment_type" onChange={handleChange}>
        <option value="online">Online</option>
        <option value="walk-in">Walk-in</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
