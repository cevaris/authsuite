export const tokensPath = '/api/v1/tokens.json';

export const fieldRegex = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export const authSessionPaths = {
  base: '/api/v1/sessions.json',
  accept: (token) => `/api/v1/sessions/tokens/${token}/accept.json`,
  reject: (token) => `/api/v1/sessions/tokens/${token}/reject.json`,
  status: (receipt) => `/api/v1/sessions/receipts/${receipt}/status.json`
};

export const authSessionStates = {
  accepted: 'accepted',
  rejected: 'rejected',
  sent: 'sent'
};
