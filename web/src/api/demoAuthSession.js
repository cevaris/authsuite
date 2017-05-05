import axios from 'axios';

export const apiPostDemoAuthSession = ({identity, identity_type}) =>
  axios.post(`/api/v1/demo/sessions.json`, {identity, identity_type});