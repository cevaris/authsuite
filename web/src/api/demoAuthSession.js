import axios from 'axios';

export const apiPostDemoAuthSession = (payload) =>
  axios.post(`/api/v1/demo/sessions.json`, payload);
