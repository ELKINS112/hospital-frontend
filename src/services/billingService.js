
import axios from 'axios';

const API_URL = 'http://localhost:5000/billing';

export const createBill = async (data) => {
  const res = await axios.post(API_URL + '/', data);
  return res.data;
};

export const getAllBills = async () => {
  const res = await axios.get(API_URL + '/');
  return res.data;
};

export const getBillsByPatient = async (patientId) => {
  const res = await axios.get(API_URL + '/patient/' + patientId);
  return res.data;
};

export const updateBill = async (billId, data) => {
  const res = await axios.put(API_URL + '/' + billId, data);
  return res.data;
};
