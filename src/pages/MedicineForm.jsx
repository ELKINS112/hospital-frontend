
import React, { useState } from 'react';
import { addOrUpdateMedicine } from '../services/pharmacyService';

const MedicineForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    unit_price: '',
    expiry_date: '',
    supplier_name: '',
    reorder_threshold: 10
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateMedicine(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add or Update Medicine</h2>
      <input name="name" placeholder="Medicine Name" onChange={handleChange} required />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} />
      <input name="unit_price" type="number" placeholder="Unit Price" onChange={handleChange} />
      <input name="expiry_date" type="date" onChange={handleChange} />
      <input name="supplier_name" placeholder="Supplier Name" onChange={handleChange} />
      <input name="reorder_threshold" type="number" placeholder="Reorder Threshold" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicineForm;
