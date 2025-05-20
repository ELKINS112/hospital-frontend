
import React, { useEffect, useState } from 'react';
import { getMedicines } from '../services/pharmacyService';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    getMedicines().then(data => setMedicines(data));
  }, []);

  return (
    <div>
      <h2>Medicine Inventory</h2>
      <ul>
        {medicines.map(m => (
          <li key={m.id}>
            {m.name} - {m.quantity} units (₦{m.unit_price}) {m.expiry_date ? `(Expires: ${m.expiry_date})` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
