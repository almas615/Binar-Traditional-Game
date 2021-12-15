import axios from 'axios';

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL,
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

export const loginUser = (loginData) => async (dispatch) => {
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

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// loadUser
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const config = {
      headers: {
        authorization: `${localStorage.getItem('accessToken')}`,
      },
    };
    const result = await axios.get('http://localhost:4000/api/me', config);
    dispatch({ type: LOAD_USER_SUCCESS, payload: result.data.user });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response,
    });
  }
};

export const updateUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    const config = {
      headers: {
        authorization: `${localStorage.getItem('accessToken')}`,
      },
    };
    const result = await axios.put(
      'http://localhost:4000/api/user/me/update',
      userData,
      config
    );

    console.log(result, 'result');

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: result.data.message });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
