import axios from "axios"
import { types } from "../context/job_context/types"
// fetch single job by id
export const getSingleJob = async (pathname, dispatch) => {
  dispatch({ type: types.GET_SINGLE_JOB_START })
  try {
    const res = await axios.get(`/jobs${pathname}`)
    dispatch({
      type: types.GET_SINGLE_JOB_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    console.log(error.res.data.errors)
    dispatch({
      type: types.GET_SINGLE_JOB_FAILURE,
      payload: error.res.data.errors,
    })
  }
}
// fetching all job/////////////////////////////////
export const fetchAllJobs = async (dispatch) => {
  dispatch({ type: types.FETCH_ALL_JOBS_START })
  try {
    const res = await axios.get("/jobs")
    dispatch({ type: types.FETCH_ALL_JOBS_SUCCESS, payload: res.data })
  } catch (error) {
    console.log(error)
  }
}
// add job
export const AddJobHandler = async (body, dispatch) => {
  dispatch({ type: types.ADD_JOB_START })
  const config = {
    headers: {
      "Context-Type": "application/josn",
    },
  }
  try {
    const res = await axios.post("/jobs", body, config)
    dispatch({ type: types.ADD_JOB_SUCCESS, payload: res.data })
    res.data && window.location.replace("/")
  } catch (error) {
    console.log(error.response.data.errors)
    dispatch({
      type: types.ADD_JOB_FAILURE,
      payload: error.response.data.errors,
    })

    error.response.data.errors && window.scrollTo(0, 300)
  }
}

// update job
export const updateJobHandler = async (id, body, dispatch) => {
  dispatch({ type: types.UPDATE_JOB_START })
  const config = {
    headers: {
      "Context-Type": "application/josn",
    },
  }
  try {
    const res = await axios.put(`/jobs/${id}`, body, config)
    console.log(res.data)
    dispatch({ type: types.UPDATE_JOB_SUCCESS, payload: res.data })
    res.data && window.location.replace("/")
  } catch (error) {
    console.log(error.response.data.errors)
    dispatch({
      type: types.UPDATE_JOB_FAILURE,
      payload: error.response.data.errors,
    })

    error.response.data.errors && window.scrollTo(0, 300)
  }
}
