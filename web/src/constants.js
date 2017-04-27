export const tokensPath = '/api/v1/tokens.json';

export const authSessionPaths = {
  base: '/api/v1/sessions.json',
  accept: (token) => `/api/v1/sessions/tokens/${token}/accept.json`,
  reject: (token) => `/api/v1/sessions/tokens/${token}/reject.json`,
  status: (receipt) => `/api/v1/sessions/receipts/${receipt}/status.json`
};
