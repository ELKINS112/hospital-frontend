
import React, { useEffect, useState } from 'react';
import { getAllPatients } from '../services/patientService';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getAllPatients().then(data => setPatients(data));
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.full_name} ({patient.category}) - {patient.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
