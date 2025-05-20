
import React, { useState } from 'react';
import { createBill } from '../services/billingService';

const BillingForm = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    item_description: '',
    amount: '',
    discount: 0,
    tax: 0,
    payment_method: 'cash',
    payment_status: 'pending',
    insurance_claim_status: 'not claimed'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBill(formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Bill</h2>
      <input name="patient_id" placeholder="Patient ID" onChange={handleChange} required />
      <input name="item_description" placeholder="Item Description" onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
      <input name="discount" type="number" placeholder="Discount" onChange={handleChange} />
      <input name="tax" type="number" placeholder="Tax" onChange={handleChange} />
      <select name="payment_method" onChange={handleChange}>
        <option value="cash">Cash</option>
        <option value="POS">POS</option>
        <option value="insurance">Insurance</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BillingForm;
