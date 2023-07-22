// src/api.js
import axios from 'axios';

const baseURL = 'http://20.244.56.144/train';

export const authenticate = (rollNumber) => {
  return axios.post(`${baseURL}/auth/`, { rollNumber });
};

export const getAllTrains = (token) => {
  return axios.get(`${baseURL}/trains`, { headers: { Authorization: `Bearer ${token}` } });
};

export const getSingleTrain = (trainId, token) => {
  return axios.get(`${baseURL}/trains/${trainId}`, { headers: { Authorization: `Bearer ${token}` } });
};