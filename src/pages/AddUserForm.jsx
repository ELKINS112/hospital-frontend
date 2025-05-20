
import React, { useState } from 'react';
import { createUser } from '../services/userService';

const AddUserForm = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(formData).then(() => {
      alert("User added successfully");
      setFormData({ full_name: '', email: '', password: '', role: '' });
      onUserAdded();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New User</h3>
      <input name="full_name" value={formData.full_name} placeholder="Full Name" onChange={handleChange} required />
      <input name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />
      <input name="password" value={formData.password} placeholder="Password" type="password" onChange={handleChange} required />
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="doctor">Doctor</option>
        <option value="nurse">Nurse</option>
        <option value="lab">Lab</option>
        <option value="pharmacist">Pharmacist</option>
        <option value="accountant">Accountant</option>
        <option value="patient">Patient</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
