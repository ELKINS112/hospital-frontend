
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://hospital-backend-0laa.onrender.com/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      if (response.data.role === "doctor") navigate("/doctor");
      else if (response.data.role === "nurse") navigate("/nurse");
      else if (response.data.role === "admin") navigate("/admin");
      else navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin}>Login</button>
      <div style={{color: "red"}}>{error}</div>
    </div>
  );
};

export default Login;
