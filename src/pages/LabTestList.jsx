
import React, { useEffect, useState } from 'react';
import { getAllLabTests } from '../services/labService';

const LabTestList = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    getAllLabTests().then(data => setTests(data));
  }, []);

  return (
    <div>
      <h2>All Lab Tests</h2>
      <ul>
        {tests.map(test => (
          <li key={test.id}>
            {test.test_type} for {test.patient} by Dr. {test.doctor} – {test.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabTestList;
