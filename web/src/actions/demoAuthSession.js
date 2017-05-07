import {SHOW_FLASH} from "./flash";
import {apiGetDemoAuthSession, apiPostDemoAuthSession} from "../api/demoAuthSession";

export const POST_DEMO_AUTH_SESSION = 'POST_DEMO_AUTH_SESSION';
export const GET_DEMO_AUTH_SESSION = 'GET_DEMO_AUTH_SESSION';

export const postDemoAuthSession = (payload) => {
  debugger;
  return (dispatch) => apiPostDemoAuthSession(payload)
    .then((response) => {
      dispatch({
        type: POST_DEMO_AUTH_SESSION,
        state: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SHOW_FLASH,
        title: 'API Failure',
        message: [error.message]
      });
    });
};

export const getDemoAuthSession = (receipt) => {
  return (dispatch) => apiGetDemoAuthSession(receipt)
    .then((response) => {
      dispatch({
        type: GET_DEMO_AUTH_SESSION,
        state: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SHOW_FLASH,
        title: 'API Failure',
        message: [error.message]
      });
    });
};