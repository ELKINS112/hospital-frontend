
import React, { useState } from 'react';
import { updateLabResult } from '../services/labService';

const LabResultForm = () => {
  const [formData, setFormData] = useState({
    test_id: '',
    result: '',
    report_file_url: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLabResult(formData.test_id, formData).then(res => alert(res.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Record Lab Result</h2>
      <input name="test_id" placeholder="Test ID" onChange={handleChange} required />
      <textarea name="result" placeholder="Result Details" onChange={handleChange} required></textarea>
      <input name="report_file_url" placeholder="Report File URL" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LabResultForm;
