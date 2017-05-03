import {ACCEPT_AUTH_SESSION, GET_AUTH_SESSION, REJECT_AUTH_SESSION} from '../actions/authSession'

const initialState = {
  acceptedAuthSession: false,
  authSession : {
    state: 'sent'
  },
  loadedGetAuthSession: false,
  rejectedAuthSession: false
};

export default function authSession(state = initialState, action = {}) {
  switch (action.type) {
    case ACCEPT_AUTH_SESSION:
      return {
        ...state,
        acceptedAuthSession: true
      };
    case GET_AUTH_SESSION:
      return {
        ...state,
        authSession: action.state,
        loadedGetAuthSession: true
      };
    case REJECT_AUTH_SESSION:
      return {
        ...state,
        rejectedAuthSession: true
      };
    default:
      return state;
  }
}
