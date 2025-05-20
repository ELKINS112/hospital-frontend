
import React, { useState } from 'react';
import { getPrescriptionsByPatient } from '../services/pharmacyService';

const PrescriptionList = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [patientId, setPatientId] = useState('');

  const handleSearch = () => {
    getPrescriptionsByPatient(patientId).then(data => setPrescriptions(data));
  };

  return (
    <div>
      <h2>Patient Prescriptions</h2>
      <input placeholder="Patient ID" value={patientId} onChange={e => setPatientId(e.target.value)} />
      <button onClick={handleSearch}>Load Prescriptions</button>
      <ul>
        {prescriptions.map(p => (
          <li key={p.id}>
            Dr. {p.doctor} prescribed {p.medicine_name} ({p.dosage}) - {p.quantity_issued} units on {p.issued_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrescriptionList;
