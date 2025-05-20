
import axios from 'axios';

const API_URL = 'http://localhost:5000/staff';

export const registerStaff = async (data) => {
  const res = await axios.post(API_URL + '/', data);
  return res.data;
};

export const getAllStaff = async () => {
  const res = await axios.get(API_URL + '/');
  return res.data;
};
