
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/lab/tests';

export const requestLabTest = async (data) => {
  const res = await axios.post(BASE_URL + '/', data);
  return res.data;
};

export const getAllLabTests = async () => {
  const res = await axios.get(BASE_URL + '/');
  return res.data;
};

export const getLabTestsByPatient = async (patientId) => {
  const res = await axios.get(BASE_URL + '/patient/' + patientId);
  return res.data;
};

export const updateLabResult = async (testId, data) => {
  const res = await axios.put(BASE_URL + '/' + testId, data);
  return res.data;
};
