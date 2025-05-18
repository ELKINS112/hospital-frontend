import axios from 'axios';

// Use environment variable or fallback to localhost
const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000";

const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/login', credentials);
  return response.data;
};
