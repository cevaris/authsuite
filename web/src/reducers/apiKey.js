import {CREATE_API_KEY} from "../actions/apiKey";
const initialState = {
  apiKey: {
    key: ''
  },
  completeNewApiKey: false
};

export default function apiKey(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_API_KEY:
      return {
        ...state,
        apiKey: action.state,
        completeNewApiKey: true,
      };
    default:
      return state;
  }
}
