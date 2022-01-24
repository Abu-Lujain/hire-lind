import { types } from "../context/types";
import axios from "axios";

// adding profile
export const addEducation = async (body, dispatch) => {
  const config = {
    headers: {
      "Cotext-Type": "application/json",
    },
  };
  dispatch({ type: types.ADDING_PROFILE_START });
  try {
    const response = await axios.put("/dev_profiles/education", body, config);

    response.data &&
      dispatch({ type: types.ADDING_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: types.ADDING_PROFILE_FAILURE,
      payload: error.response.data.errors,
    });
    console.log(error.response.data.errors);
  }
};

// create profile
export const createProfile = async (dispatch) => {
  dispatch({ type: types.CREATE_PROFILE_START });
  try {
    const response = await axios.post("/dev_profiles");

    response.data &&
      dispatch({ type: types.CREATE_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("data: ", error.response.data.errors);
    dispatch({
      type: types.CREATE_PROFILE_FAILURE,
      payload: error.response.data.errors,
    });
  }
};
export const fetchProfile = async (dispatch) => {
  dispatch({ type: types.LOAD_PROFILE_START });
  try {
    const response = await axios.get("/dev_profiles/me");

    response.data &&
      dispatch({ type: types.LOAD_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("data: ", error.response.data.errors);
    dispatch({
      type: types.LOAD_PROFILE_FAILURE,
      payload: error.response.data.errors,
    });
  }
};
// update
export const updateProfile = async (body, dispatch) => {
  dispatch({ type: types.UPDATE_PROFILE_START });
  const config = {
    headers: {
      "Context-Type": "application/json",
    },
  };
  try {
    const response = await axios.post("/dev_profiles", body, config);
    response.data &&
      dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: error.response.data.errors,
    });
  }
};

// adding experience
export const addExperince = async (body, dispatch) => {
  dispatch({ type: types.ADD_EXPERIENCE_START });
  const config = {
    "Context-Type": "application/json",
  };
  try {
    const response = await axios.put("/dev_profiles/experience", body, config);
    response.data &&
      dispatch({ type: types.ADD_EXPERIENCE_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error.response.data.errors);
    dispatch({
      type: types.ADD_EXPERIENCE_FAILURE,
      payload: error.response.data.errors,
    });
  }
};

// Delete experience
export const deleteExperience = async (id, dispatch) => {
  dispatch({ type: types.DELETE_EXPERIENCE_START });
  try {
    const response = await axios.delete("/dev_profiles/experience/" + id);
    response.data &&
      dispatch({
        type: types.DELETE_EXPERIENCE_SUCCESS,
        payload: response.data,
      });
  } catch (error) {
    dispatch({
      type: types.DELETE_EXPERIENCE_FAILURE,
      payload: error.response.data.errors,
    });
  }
};
// // adding Education
// export const addEducation = async (body, dispatch) => {
//   dispatch({ type: types.ADD_EXPERIENCE_START });
//   const config = {
//     "Context-Type": "application/json",
//   };
//   try {
//     const response = await axios.put("/dev_profiles/experience", body, config);
//     console.log(response.data);
//     response.data &&
//       dispatch({ type: types.ADD_EXPERIENCE_SUCCESS, payload: response.data });
//   } catch (error) {
//     console.log("data: ", error.response.data.errors);
//     dispatch({
//       type: types.ADD_EXPERIENCE_FAILURE,
//       payload: error.response.data.errors,
//     });
//   }
// };

// // Delete experience
// export const deleteExperience = async (id, dispatch) => {
//   dispatch({ type: types.DELETE_EXPERIENCE_START });
//   try {
//     const response = await axios.delete("/dev_profiles/experience/" + id);
//     response.data &&
//       dispatch({
//         type: types.DELETE_EXPERIENCE_SUCCESS,
//         payload: response.data,
//       });
//   } catch (error) {
//     dispatch({
//       type: types.DELETE_EXPERIENCE_FAILURE,
//       payload: error.response.data.errors,
//     });
//   }
// };
