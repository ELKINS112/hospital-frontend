import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [summary, setSummary] = useState({
    patients: 0,
    appointments: 0,
    bills: 0,
    medicines: 0,
    labs: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [p, a, b, m, l] = await Promise.all([
          axios.get("http://localhost:5000/api/patients"),
          axios.get("http://localhost:5000/api/appointments"),
          axios.get("http://localhost:5000/api/billing"),
          axios.get("http://localhost:5000/api/pharmacy"),
          axios.get("http://localhost:5000/api/lab-tests")
        ]);
        setSummary({
          patients: p.data.length,
          appointments: a.data.length,
          bills: b.data.length,
          medicines: m.data.length,
          labs: l.data.length
        });
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Total Patients" count={summary.patients} />
      <Card title="Appointments" count={summary.appointments} />
      <Card title="Bills" count={summary.bills} />
      <Card title="Medicines" count={summary.medicines} />
      <Card title="Lab Tests" count={summary.labs} />
    </div>
  );
}

function Card({ title, count }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-3xl text-blue-700 font-bold">{count}</p>
    </div>
  );
}

export default Dashboard;
