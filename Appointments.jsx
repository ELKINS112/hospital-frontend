import React, { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    patient_id: "",
    doctor_name: "",
    date: "",
    time: ""
  });

  useEffect(() => {
    axios.get("https://hospital-backend.onrender.com/api/appointments")
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://hospital-backend.onrender.com/api/appointments", form)
      .then(() => window.location.reload())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input type="text" placeholder="Patient ID" className="border p-2 w-full"
          onChange={e => setForm({ ...form, patient_id: e.target.value })} />
        <input type="text" placeholder="Doctor Name" className="border p-2 w-full"
          onChange={e => setForm({ ...form, doctor_name: e.target.value })} />
        <input type="date" className="border p-2 w-full"
          onChange={e => setForm({ ...form, date: e.target.value })} />
        <input type="time" className="border p-2 w-full"
          onChange={e => setForm({ ...form, time: e.target.value })} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Book</button>
      </form>

      <h3 className="text-lg">Upcoming Appointments</h3>
      <ul className="list-disc pl-5">
        {appointments.map((a, index) => (
          <li key={index}>
            Patient ID: {a.patient_id}, Doctor: {a.doctor_name}, Date: {a.date} at {a.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
