import {apiAcceptAuthSession, apiGetAuthSession, apiRejectAuthSession} from "../api/authSession";

export const acceptAuthSession = (token) => {
  return (dispatch) => apiAcceptAuthSession(token)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log('error', error)
      // dispatch({
      //   type: ADD_API_ERROR,
      //   title: errorMessages.couldNotAuthenticateUser,
      //   errors: [error.response.data.error.message]
      // });
    });
};


export const rejectAuthSession = (token) => {
  return (dispatch) => apiRejectAuthSession(token)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log('error', error)
      // dispatch({
      //   type: ADD_API_ERROR,
      //   title: errorMessages.couldNotAuthenticateUser,
      //   errors: [error.response.data.error.message]
      // });
    });
};

export const getAuthSession = (token) => {
  return (dispatch) => apiGetAuthSession(token)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log('error', error)
      // dispatch({
      //   type: ADD_API_ERROR,
      //   title: errorMessages.couldNotAuthenticateUser,
      //   errors: [error.response.data.error.message]
      // });
    });
};