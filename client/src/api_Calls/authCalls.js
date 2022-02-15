import axios from "axios";
import { types } from "../context/auth_context/types";
import setAuthToken from "./setAuthToken";
// Register new user
export const registerCall = async (credentials, dispatch) => {
  const config = {
    headers: {
      "Context-Type": "application/json",
    },
  };
  dispatch({ type: types.REGISTER_START });
  try {
    const response = await axios.post("/users", credentials, config);
    dispatch({ type: types.REGISTER_SUCCUESS, payload: response.data });
    response.data && window.location.replace("/");
    console.log("data: ", response.data);
  } catch (error) {
    console.log("from register: ", error.response.data);

    dispatch({
      type: types.LOGIN_FAILURE,
      payload: error.response.data.errors,
    });
  }
};
// Log in user
export const loginCall = async (credentials, dispatch) => {
  const config = {
    headers: {
      "Context-Type": "application/json",
    },
  };
  dispatch({ type: types.LOGIN_START });
  try {
    const response = await axios.post("/auth", credentials, config);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
    response.data && window.location.replace("/");
  } catch (error) {
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: error.response.data.errors,
    });
  }
};
// loading user
export const loadUserCall = async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/auth");
    dispatch({ type: types.LOAD_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.LOAD_USER_FAILURE,
      // payload: error.response.data.errors,
      payload: error,
    });
  }
};
export const logOut = (dispatch) => {
  dispatch({ type: types.LOG_OUT_USER, payload: "you are loging out..." });
  // window.location.reload()
};
