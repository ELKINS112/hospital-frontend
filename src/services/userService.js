
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/users';

export const createUser = async (data) => {
  const res = await axios.post(BASE_URL + '/', data);
  return res.data;
};

export const getAllUsers = async () => {
  const res = await axios.get(BASE_URL + '/');
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await axios.delete(BASE_URL + '/' + id);
  return res.data;
};
