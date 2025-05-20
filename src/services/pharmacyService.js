
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/pharmacy';

export const addOrUpdateMedicine = async (data) => {
  const res = await axios.post(BASE_URL + '/medicines/', data);
  return res.data;
};

export const getMedicines = async () => {
  const res = await axios.get(BASE_URL + '/medicines/');
  return res.data;
};

export const issuePrescription = async (data) => {
  const res = await axios.post(BASE_URL + '/prescriptions/', data);
  return res.data;
};

export const getPrescriptionsByPatient = async (patientId) => {
  const res = await axios.get(BASE_URL + '/prescriptions/patient/' + patientId);
  return res.data;
};
