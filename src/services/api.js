import axios from 'axios';

const API_BASE = "https://hospital-backend-0laa.onrender.com";

export const loginUser = async (credentials) => {
  return axios.post(`${API_BASE}/login`, credentials, {
    withCredentials: true
  });
};
