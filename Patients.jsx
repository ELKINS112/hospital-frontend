import React, { useEffect, useState } from "react";
import axios from "axios";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    type: "outpatient"
  });

  useEffect(() => {
    axios.get("https://hospital-backend.onrender.com/api/patients")
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://hospital-backend.onrender.com/api/patients", form)
      .then(() => window.location.reload())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Register New Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input type="text" placeholder="Full Name" className="border p-2 w-full"
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="number" placeholder="Age" className="border p-2 w-full"
          onChange={e => setForm({ ...form, age: e.target.value })} />
        <select className="border p-2 w-full" onChange={e => setForm({ ...form, gender: e.target.value })}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select className="border p-2 w-full" onChange={e => setForm({ ...form, type: e.target.value })}>
          <option value="outpatient">Outpatient</option>
          <option value="inpatient">Inpatient</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Register</button>
      </form>

      <h3 className="text-lg mb-2">Patient List</h3>
      <ul className="list-disc pl-5">
        {patients.map((p, i) => (
          <li key={i}>{p.name} ({p.gender}, {p.age}) - {p.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default Patients;
