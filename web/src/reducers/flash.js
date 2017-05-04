import { RESET_FLASH } from '../actions/flash';

const initialState = {
  message: '',
  level: 'info',
  title: '',
  showFlash: true
};

export default function flash(state = initialState, action = {}) {
  switch (action.type) {
    case RESET_FLASH:
      return initialState;
    default:
      return state;
  }
}
