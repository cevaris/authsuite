import {SHOW_FLASH} from "./flash";
import {apiCreateApiKey} from "../api/apiKey";

export const CREATE_API_KEY = 'CREATE_API_KEY';

export const createApiKey = (payload) => {
  return (dispatch) => apiCreateApiKey(payload)
    .then((response) => {
      dispatch({
        type: CREATE_API_KEY,
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