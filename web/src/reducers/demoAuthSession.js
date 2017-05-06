import {GET_DEMO_AUTH_SESSION, POST_DEMO_AUTH_SESSION} from "../actions/demoAuthSession";

const initialState = {
  demoAuthSession: {
    receipt: '',
    state: 'sent',
    identity_type: '',
    identity: '',
  },
  demoAuthSessionCreated: false,
};

export default function demoAuthSession(state = initialState, action = {}) {
  switch (action.type) {
    case POST_DEMO_AUTH_SESSION:
      return {
        ...state,
        demoAuthSession: action.state,
        demoAuthSessionCreated: true
      };
    case GET_DEMO_AUTH_SESSION:
      return {
        ...state,
        demoAuthSession: action.state
      };
    default:
      return state;
  }
}
