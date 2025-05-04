import React, { useState, useEffect } from "react";
import axios from "axios";

function Pharmacy() {
  const [medicines, setMedicines] = useState([]);
  const [form, setForm] = useState({
    name: "",
    manufacturer: "",
    quantity: "",
    expiry_date: "",
    price: "",
    supplier: ""
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/pharmacy")
      .then(res => setMedicines(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/pharmacy", form)
      .then(() => window.location.reload())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Add Medicine</h2>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input type="text" placeholder="Name" className="border p-2 w-full"
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="text" placeholder="Manufacturer" className="border p-2 w-full"
          onChange={e => setForm({ ...form, manufacturer: e.target.value })} />
        <input type="number" placeholder="Quantity" className="border p-2 w-full"
          onChange={e => setForm({ ...form, quantity: e.target.value })} />
        <input type="date" className="border p-2 w-full"
          onChange={e => setForm({ ...form, expiry_date: e.target.value })} />
        <input type="number" placeholder="Price" className="border p-2 w-full"
          onChange={e => setForm({ ...form, price: e.target.value })} />
        <input type="text" placeholder="Supplier" className="border p-2 w-full"
          onChange={e => setForm({ ...form, supplier: e.target.value })} />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">Add Medicine</button>
      </form>

      <h3 className="text-lg mb-2">Inventory List</h3>
      <ul className="list-disc pl-5">
        {medicines.map((med, index) => (
          <li key={index}>
            {med.name} – {med.quantity} units, Expires: {med.expiry_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pharmacy;
