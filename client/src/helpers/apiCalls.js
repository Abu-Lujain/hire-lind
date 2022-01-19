import { types } from "../context/types";
import axios from "axios";
import setAuthToken from "./setAuthToken";
export const registerCall = async (credentials, dispatch) => {
  const config = {
    headers: {
      "Context-Type": "application/json",
    },
  };
  dispatch({ type: types.LOGIN_START });
  try {
    const response = await axios.post("/users", credentials, config);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response.data });
    response.data && window.location.replace("/me");
    localStorage.setItem("first", true);

    console.log("response.data");
  } catch (error) {
    console.log(error.response.data.errors);
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
      payload: error.response.data.errors,
    });
    // console.log(error.response.data.errors);
  }
};
