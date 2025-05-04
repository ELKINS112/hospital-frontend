import React, { useEffect, useState } from "react";
import axios from "axios";

function Lab() {
  const [tests, setTests] = useState([]);
  const [form, setForm] = useState({
    patient_id: "",
    test_name: "",
    doctor_name: "",
    test_date: "",
    result: "",
    status: "Pending"
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/lab-tests")
      .then(res => setTests(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/lab-tests", form)
      .then(() => window.location.reload())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Schedule Lab Test</h2>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input type="text" placeholder="Patient ID" className="border p-2 w-full"
          onChange={e => setForm({ ...form, patient_id: e.target.value })} />
        <input type="text" placeholder="Test Name" className="border p-2 w-full"
          onChange={e => setForm({ ...form, test_name: e.target.value })} />
        <input type="text" placeholder="Doctor Name" className="border p-2 w-full"
          onChange={e => setForm({ ...form, doctor_name: e.target.value })} />
        <input type="date" className="border p-2 w-full"
          onChange={e => setForm({ ...form, test_date: e.target.value })} />
        <textarea placeholder="Result (optional)" className="border p-2 w-full"
          onChange={e => setForm({ ...form, result: e.target.value })}></textarea>
        <select className="border p-2 w-full"
          onChange={e => setForm({ ...form, status: e.target.value })}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Save</button>
      </form>

      <h3 className="text-lg mb-2">All Lab Tests</h3>
      <ul className="list-disc pl-5">
        {tests.map((test, index) => (
          <li key={index}>
            {test.test_name} for Patient {test.patient_id} – {test.status}
            {test.result && <div className="text-sm text-gray-600">Result: {test.result}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lab;
