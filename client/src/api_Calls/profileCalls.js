import { axiosInstance } from "../config/axiosInstance"
import { types } from "../context/profile_context/types"

// create profile
export const createProfile = async (dispatch) => {
  dispatch({ type: types.CREATE_PROFILE_START })
  try {
    const response = await axiosInstance.post("/developersProfiles")
    response.data &&
      dispatch({ type: types.CREATE_PROFILE_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({
      type: types.CREATE_PROFILE_FAILURE,
      payload: error?.response?.data.errors,
    })
  }
}
// adding profile
export const fetchProfile = async (dispatch) => {
  dispatch({ type: types.LOAD_PROFILE_START })
  try {
    const response = await axiosInstance.get("/developersProfiles/me")
    // console.log(response.data);
    response.data &&
      dispatch({ type: types.LOAD_PROFILE_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({
      type: types.LOAD_PROFILE_FAILURE,
      payload: error?.response?.data.errors,
    })
  }
}
// update
export const updateProfile = async (body, dispatch) => {
  dispatch({ type: types.UPDATE_PROFILE_START })
  const config = {
    headers: {
      "Context-Type": "application/json",
    },
  }
  try {
    const response = await axiosInstance.post(
      "/developersProfiles",
      body,
      config
    )
    console.log(response.data)
    response.data &&
      dispatch({ type: types.UPDATE_PROFILE_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({
      type: types.UPDATE_PROFILE_FAILURE,
      payload: error?.response?.data.errors,
    })
  }
}

// adding experience
export const addExperince = async (body, dispatch) => {
  dispatch({ type: types.ADD_EXPERIENCE_START })
  const config = {
    "Context-Type": "application/json",
  }
  try {
    const response = await axiosInstance.put(
      "/developersProfiles/experience",
      body,
      config
    )
    response.data &&
      dispatch({ type: types.ADD_EXPERIENCE_SUCCESS, payload: response.data })
  } catch (error) {
    const res = await axiosInstance.get("/developersProfiles/me")
    dispatch({
      type: types.ADD_EXPERIENCE_FAILURE,
      payload: {
        errors: error?.response?.data.errors,
        profile: res.data,
      },
    })
  }
}

// Delete experience
export const deleteExperience = async (id, dispatch) => {
  dispatch({ type: types.DELETE_EXPERIENCE_START })
  try {
    const response = await axiosInstance.delete(
      "/developersProfiles/experience/" + id
    )
    response.data &&
      dispatch({
        type: types.DELETE_EXPERIENCE_SUCCESS,
        payload: response.data,
      })
  } catch (error) {
    console.log(error?.response?.data.errors)
    dispatch({
      type: types.DELETE_EXPERIENCE_FAILURE,
      payload: error?.response?.data.errors,
    })
  }
}
// // adding Education
export const addEducation = async (body, dispatch) => {
  dispatch({ type: types.ADD_EDUCATION_START })
  const config = {
    "Context-Type": "application/json",
  }
  try {
    const response = await axiosInstance.put(
      "/developersProfiles/education",
      body,
      config
    )
    console.log(response.data)
    response.data &&
      dispatch({ type: types.ADD_EDUCATION_SUCCESS, payload: response.data })
  } catch (error) {
    console.log("data: ", error?.response?.data.errors)
    dispatch({
      type: types.ADD_EDUCATION_FAILURE,
      payload: error?.response?.data.errors,
    })
  }
}

// // Delete education
export const deleteEducation = async (id, dispatch) => {
  dispatch({ type: types.DELETE_EDUCATION_START })
  try {
    const response = await axiosInstance.delete(
      "/developersProfiles/education/" + id
    )
    response.data &&
      dispatch({
        type: types.DELETE_EDUCATION_SUCCESS,
        payload: response.data,
      })
  } catch (error) {
    dispatch({
      type: types.DELETE_EDUCATION_FAILURE,
      payload: error?.response?.data.errors,
    })
  }
}
// upload profile photo
export const uploadProfilePhoto = async (e, profile, dispatch) => {
  dispatch({ type: types.UPLOAD_PHOTO_START })
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append("photo", file)
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    const response = await axiosInstance.post("/uploads", formData, config)
    if (response.data) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      profile.photo = response.data
      await axiosInstance.post("/developersProfiles", profile, config)
      dispatch({ type: types.UPLOAD_PHOTO_SUCCESS, payload: profile })
      console.log(profile.photo)
    }
  } catch (error) {
    dispatch({
      type: types.UPLOAD_PHOTO_FAILURE,
      payload: error?.response?.data,
    })
    console.log(error)
  }
}
