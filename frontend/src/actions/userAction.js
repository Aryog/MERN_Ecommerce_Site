import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { header: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.message,
    });
  }
};