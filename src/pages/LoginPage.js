import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://hospital-backend-0laa.onrender.com/login", {
        email,
        password,
      });
      const { token, role } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // Redirect to role-specific dashboard
      navigate(`/${role}/dashboard`);
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || "Try again"));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
