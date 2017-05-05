import {POST_DEMO_AUTH_SESSION} from "../actions/demoAuthSession";

const initialState = {
  authSession: {
    state: 'sent'
  },
};

export default function demoAuthSession(state = initialState, action = {}) {
  switch (action.type) {
    case POST_DEMO_AUTH_SESSION:
      return {
        ...state,
        authSession: action.state
      };
    default:
      return state;
  }
}
