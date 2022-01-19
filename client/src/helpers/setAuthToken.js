import axios from "axios";

const setAuthToken = (token) => {
  console.log(axios.defaults.headers.common["Authorization"] + "9999999");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default setAuthToken;
