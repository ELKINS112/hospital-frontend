import React, { useState, useEffect } from "react";
import axios from "axios";

function Billing() {
  const [bills, setBills] = useState([]);
  const [form, setForm] = useState({
    patient_id: "",
    items: "",
    total_amount: "",
    payment_method: "Cash",
  });

  useEffect(() => {
    axios.get("https://hospital-backend.onrender.com/api/billing")
      .then(res => setBills(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const billData = {
      ...form,
      items: form.items.split(",").map(i => i.trim())
    };

    axios.post("https://hospital-backend.onrender.com/api/billing", billData)
      .then(() => window.location.reload())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Create Bill</h2>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input type="text" placeholder="Patient ID" className="border p-2 w-full"
          onChange={e => setForm({ ...form, patient_id: e.target.value })} />
        <input type="text" placeholder="Items (comma separated)" className="border p-2 w-full"
          onChange={e => setForm({ ...form, items: e.target.value })} />
        <input type="number" placeholder="Total Amount" className="border p-2 w-full"
          onChange={e => setForm({ ...form, total_amount: e.target.value })} />
        <select className="border p-2 w-full" onChange={e => setForm({ ...form, payment_method: e.target.value })}>
          <option value="Cash">Cash</option>
          <option value="POS">POS</option>
          <option value="Insurance">Insurance</option>
        </select>
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Generate Bill</button>
      </form>

      <h3 className="text-lg mb-2">Billing Records</h3>
      <ul className="list-disc pl-5">
        {bills.map((bill, index) => (
          <li key={index}>
            Patient ID: {bill.patient_id}, Amount: ₦{bill.total_amount}, Items: {bill.items.join(", ")}, Status: {bill.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Billing;
