const API_BASE = "https://hospital-backend-0laa.onrender.com";

export async function login(email, password) {
  try {
    const res = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    return await res.json();
  } catch (err) {
    console.error("Login failed", err);
    return null;
  }
}