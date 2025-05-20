
import axios from 'axios';

const API_URL = 'http://localhost:5000/patients';

export const getAllPatients = async () => {
  const res = await axios.get(API_URL + '/');
  return res.data;
};

export const registerPatient = async (data) => {
  const res = await axios.post(API_URL + '/', data);
  return res.data;
};
