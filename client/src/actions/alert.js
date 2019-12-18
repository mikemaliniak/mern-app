import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });
    // Dispatch the remove alert function 5000 miliseconds after it has been added
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
}