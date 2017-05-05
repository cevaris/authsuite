import {RESET_FLASH, SHOW_FLASH} from '../actions/flash';

const initialState = {
  message: [''],
  level: 'info',
  title: '',
  showFlash: false
};

export default function flash(state = initialState, action = {}) {
  switch (action.type) {
    case RESET_FLASH:
      return initialState;
    case SHOW_FLASH:
      return {
        message: action.message || initialState.message,
        level: action.level || initialState.level,
        title: action.title || initialState.title,
        showFlash: true,
      };
    default:
      return state;
  }
}
