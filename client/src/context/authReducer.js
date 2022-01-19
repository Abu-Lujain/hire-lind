import React from "react";
import { types } from "./types";
export default function authReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_USER_SUCCESS:
      return {
        token: localStorage.getItem("token"),
        user: payload,
        loading: false,
        errors: false,
      };
    case types.LOGIN_START:
      console.log("I deleted the token");
      return {
        token: localStorage.getItem("token"),
        loading: true,
        errors: false,
        user: null,
      };

    case types.LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      console.log("from success");
      return {
        token: payload,
        loading: false,
        errors: false,
      };
    case types.LOGIN_FAILURE:
    case types.LOAD_USER_FAILURE:
      localStorage.removeItem("token");
      return {
        token: null,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
}
