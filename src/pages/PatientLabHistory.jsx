
import React, { useState } from 'react';
import { getLabTestsByPatient } from '../services/labService';

const PatientLabHistory = () => {
  const [tests, setTests] = useState([]);
  const [patientId, setPatientId] = useState('');

  const fetchHistory = () => {
    getLabTestsByPatient(patientId).then(data => setTests(data));
  };

  return (
    <div>
      <h2>Patient Lab History</h2>
      <input value={patientId} onChange={e => setPatientId(e.target.value)} placeholder="Patient ID" />
      <button onClick={fetchHistory}>Load</button>
      <ul>
        {tests.map(t => (
          <li key={t.id}>
            {t.test_type} - {t.status} | {t.result || "No result yet"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientLabHistory;
