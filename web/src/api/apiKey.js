import axios from 'axios';

export const apiCreateApiKey = (payload) =>
  axios.post(`/api/v1/keys.json`, payload);