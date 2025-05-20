
import axios from 'axios';

const API_URL = 'http://localhost:5000/records';

export const addMedicalRecord = async (data) => {
  const res = await axios.post(API_URL + '/', data);
  return res.data;
};

export const getRecordsByPatient = async (patientId) => {
  const res = await axios.get(API_URL + '/patient/' + patientId);
  return res.data;
};

export const getSingleRecord = async (recordId) => {
  const res = await axios.get(API_URL + '/' + recordId);
  return res.data;
};
