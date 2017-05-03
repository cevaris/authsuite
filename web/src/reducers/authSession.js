import {GET_AUTH_SESSION} from '../actions/authSession'

const initialState = {
  loadedGetAuthSession: false
};

export default function authSession(state = initialState, action = {}) {
  switch (action.type) {
    case GET_AUTH_SESSION:
      return {
        ...state,
        loadedGetAuthSession: true
      };
    default:
      return state;
  }
}
