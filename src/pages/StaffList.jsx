
import React, { useEffect, useState } from 'react';
import { getAllStaff } from '../services/staffService';

const StaffList = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    getAllStaff().then(data => setStaff(data));
  }, []);

  return (
    <div>
      <h2>Staff List</h2>
      <ul>
        {staff.map(s => (
          <li key={s.id}>
            {s.name} ({s.role}) - {s.department} {s.on_duty ? '[On Duty]' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffList;
