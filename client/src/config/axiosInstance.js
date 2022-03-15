import axios from "axios"
export const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://aamalonline.herokuapp.com/api/",
})
export const PF = "https://aamalonline.herokuapp.com"
// export const PF = "http://localhost:8000"
