import axios from 'axios';

export const apiGetAuthSession = (token) =>
  axios.get(`/api/v1/sessions/tokens/${token}.json`);

export const apiAcceptAuthSession = (token) =>
  axios.post(`/api/v1/sessions/tokens/${token}/accept.json`);

export const apiRejectAuthSession = (token) =>
  axios.post(`/api/v1/sessions/tokens/${token}/reject.json`);
