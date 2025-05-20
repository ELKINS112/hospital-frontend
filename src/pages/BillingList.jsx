
import React, { useEffect, useState } from 'react';
import { getAllBills } from '../services/billingService';

const BillingList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    getAllBills().then(data => setBills(data));
  }, []);

  return (
    <div>
      <h2>Billing Records</h2>
      <ul>
        {bills.map(b => (
          <li key={b.id}>
            {b.patient}: {b.description} - ₦{b.total} ({b.method}, {b.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillingList;
