import axios from 'axios';

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_ERRORS,
} from '../constants/userConstants';

// Register user
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:4000/api/register',
      userData,
      config
    );

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const userLogin = (loginData) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      'http://localhost:4000/api/login',
      loginData,
      config
    );

    localStorage.setItem('accessToken', data.data.accessToken);

    console.log(data, 'ini hasilnya');

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: LOGIN_USER_FAIL,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
