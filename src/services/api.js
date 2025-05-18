import axios from 'axios';

const API_BASE = "https://hospital-backend-0laa.onrender.com";

// Configure Axios globally if needed
const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: false,  // set to true if your backend uses cookies
  headers: {
    'Content-Type': 'application/json'
  }
});

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/login', credentials);
  return response.data;
};
