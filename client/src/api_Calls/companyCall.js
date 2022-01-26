import axios from "axios";
import { types } from "../context/types";
// create profile
export const createProfile = async (dispatch) => {
  dispatch({ type: types.CREATE_COMPANY_START });
  try {
    const response = await axios.post("/companiesProfiles");
    response.data &&
      dispatch({ type: types.CREATE_COMPANY_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.CREATE_COMPANY_FAILURE,
      payload: error.response.data,
    });
  }
};
