import axios from 'axios';

export const apiPostDemoAuthSession = (payload) =>
  axios.post(`/api/v1/demo/sessions.json`, payload);

export const apiGetDemoAuthSession = (receipt) =>
  axios.get(`api/v1/demo/sessions/receipts/${receipt}/status.json`);