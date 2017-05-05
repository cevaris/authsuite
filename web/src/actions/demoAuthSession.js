import {SHOW_FLASH} from "./flash";
import {apiPostDemoAuthSession} from "../api/demoAuthSession";

export const POST_DEMO_AUTH_SESSION = 'POST_DEMO_AUTH_SESSION';

export const postDemoAuthSession = (payload) => {
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