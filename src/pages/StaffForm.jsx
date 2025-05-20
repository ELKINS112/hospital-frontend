
import React, { useState } from 'react';
import { registerStaff } from '../services/staffService';

const StaffForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    role: 'doctor',
    department: '',
    specialization: '',
    shift_start: '',
    shift_end: '',
    on_duty: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerStaff(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Staff</h2>
      <input name="full_name" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="doctor">Doctor</option>
        <option value="nurse">Nurse</option>
      </select>
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="specialization" placeholder="Specialization" onChange={handleChange} />
      <input name="shift_start" type="time" onChange={handleChange} />
      <input name="shift_end" type="time" onChange={handleChange} />
      <label>
        <input type="checkbox" name="on_duty" onChange={handleChange} />
        On Duty
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default StaffForm;
