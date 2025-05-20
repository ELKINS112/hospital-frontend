
import React, { useState } from 'react';
import { getRecordsByPatient } from '../services/medicalRecordService';

const MedicalRecordList = () => {
  const [records, setRecords] = useState([]);
  const [patientId, setPatientId] = useState('');

  const fetchRecords = () => {
    getRecordsByPatient(patientId).then(data => setRecords(data));
  };

  return (
    <div>
      <h2>Medical Records</h2>
      <input placeholder="Enter Patient ID" value={patientId} onChange={e => setPatientId(e.target.value)} />
      <button onClick={fetchRecords}>Load Records</button>
      <ul>
        {records.map(record => (
          <li key={record.id}>
            {record.visit_date}: {record.diagnosis} - {record.treatment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecordList;
