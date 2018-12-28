import axios from 'axios';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, MESSAGE_UPDATE } from './types';

export const loginUser = (input, callback) => async dispatch => {
  try {
    const { email, password } = input;
    const response = await axios.post('/api/auth/login', { email, password });

    dispatch({ type: AUTH_LOGIN, payload: response.data });

    callback();
  } catch (e) {
    dispatch({
      type: MESSAGE_UPDATE,
      payload: { type: 'error', text: e.response.statusText },
    });
  }
};

export const logoutUser = callback => async dispatch => {
  try {
    await axios.get('/api/auth/logout');

    dispatch({ type: AUTH_LOGOUT });

    callback();
  } catch (e) {
    dispatch({
      type: MESSAGE_UPDATE,
      payload: {
        type: 'error',
        text: 'Something went wrong!',
      },
    });
  }
};

export const fetchUser = () => async dispatch => {
  try {
    const response = await axios.get('/api/auth/current');

    dispatch({ type: AUTH_LOGIN, payload: response.data });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: '' });
  }
};

export const resetUser = () => async dispatch => {
  try {
    dispatch({
      type: MESSAGE_UPDATE,
      payload: {
        type: 'success',
        text: 'Check your email to reset your password',
      },
    });
  } catch (e) {
    dispatch({
      type: MESSAGE_UPDATE,
      payload: {
        type: 'error',
        text: 'Something went wrong!',
      },
    });
  }
};
