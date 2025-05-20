
import React, { useEffect, useState } from 'react';
import { getAppointments } from '../services/appointmentService';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then(data => setAppointments(data));
  }, []);

  return (
    <div>
      <h2>Appointment List</h2>
      <ul>
        {appointments.map(a => (
          <li key={a.id}>
            {a.patient} with Dr. {a.doctor} on {a.date} at {a.time} [{a.status}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
