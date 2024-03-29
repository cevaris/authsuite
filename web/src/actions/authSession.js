import { SHOW_FLASH } from './flash';
import { apiAcceptAuthSession, apiGetAuthSession, apiRejectAuthSession } from '../api/authSession';

export const ACCEPT_AUTH_SESSION = 'ACCEPT_AUTH_SESSION';
export const REJECT_AUTH_SESSION = 'REJECT_AUTH_SESSION';
export const GET_AUTH_SESSION = 'GET_AUTH_SESSION';

export const getAuthSession = (token) => {
  return (dispatch) => apiGetAuthSession(token)
    .then((response) => {
      dispatch({
        type: GET_AUTH_SESSION,
        state: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SHOW_FLASH,
        title: 'API Failure',
        message: [ error.message ]
      });
    });
};

export const acceptAuthSession = (token) => {
  return (dispatch) => apiAcceptAuthSession(token)
    .then((response) => {
      dispatch({
        type: ACCEPT_AUTH_SESSION
      });

      return dispatch(getAuthSession(token));
    })
    .catch((error) => {
      dispatch({
        type: SHOW_FLASH,
        title: 'API Failure',
        message: [ error.message ]
      });
    });
};

export const rejectAuthSession = (token) => {
  return (dispatch) => apiRejectAuthSession(token)
    .then((response) => {
      dispatch({
        type: REJECT_AUTH_SESSION
      });

      return dispatch(getAuthSession(token));
    })
    .catch((error) => {
      dispatch({
        type: SHOW_FLASH,
        title: 'API Failure',
        message: [ error.message ]
      });
    });
};
