import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuid } from 'uuid';

export const setAlert = (msg, alertType, timeout = 2500) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  // Set a time for remove alert
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
