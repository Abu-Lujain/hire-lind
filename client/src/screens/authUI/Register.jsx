// import { Link, Redirect } from "react-router-dom";
import "./register.css";
import { useState, useContext, useRef, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"

import { authContext } from "../../context/auth_context/authContext"
import { Spinner, Form } from "react-bootstrap"

import { CameraAltOutlined } from "@material-ui/icons"
import Google from "./Google"
import { axiosInstance } from "../../config/axiosInstance"
const Register = ({ notConfirmed, setNotConfirmed }) => {
  const checkRef = useRef()
  const { user, loading, dispatch, token } = useContext(authContext)
  const [userName, setuserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [photo, setPhoto] = useState("")
  const [uploading, setUploading] = useState(false)
  const [profileType, setProfileType] = useState("")
  const [checkProfile, setCheckProfile] = useState("")

  const history = useHistory()
  // console.log("token: ", token);
  // console.log("user: ", user);
  // console.log("loading: ", loading);
  // console.log("errors: ", errors);
  const uploadPhoto = async (e) => {
    setUploading(true)
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append("photo", file)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
    try {
      const res = await axiosInstance.post("/uploads", formData, config)
      if (res.data) {
        setPhoto(res.data)
        setUploading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const newUser = {
    userName,
    email,
    password,
    profileType,
    photo,
  }
  useEffect(() => {
    setNotConfirmed(localStorage.getItem("registered"))
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    }
    try {
      const res = await axiosInstance.post("/users", newUser, config)
      if (!notConfirmed) { localStorage.setItem("registered", true) }
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <div className="register row mt-3">
      {loading ? (
        <div className="spinner-parent">
          <Spinner
            className="load-profile-spinner m-3"
            variant="primary"
            animation="border"
            role="status"
          ></Spinner>
          {/* create JS animatino */}
          <h4>Registering...</h4>
        </div>
      ) : (
        <>
          {notConfirmed ? (
            <div className="spinner-parent">
              <h4 className=" text-white mb-3 p-3">thanks for Choosing Us!</h4>
              <h2 className="bg-success  text-white m-5 p-3">
                We Have Sent You an Email, Please Click the Confirmation Link to
                Login.
              </h2>
              <div
                className="button btn btn-info btn-sm"
                onClick={() => {
                  setNotConfirmed("")
                }}
              >
                Try again
              </div>
            </div>
          ) : (
            <form className=" col-10 col-md-5" onSubmit={handleSubmit}>
              {" "}
              {profileType === "company" && (
                <small className="register-note">
                  this will be the name of your company <span></span>
                </small>
              )}
              <h5 className="text-center text-white">create and account</h5>
              <div className="form-group">
                <label className="form-color">name</label>
                <input
                  name="userName"
                  type="text"
                  className="form-control my-3 "
                  autoComplete="off"
                  required
                  onChange={(e) => setuserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-color">email</label>

                <input
                  className="form-control my-3"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-color">password</label>{" "}
                <input
                  name="password"
                  className="form-control mb-3"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <span>what kind of profile you want to make? </span>{" "}
                <div className="form-group profile-type" ref={checkRef}>
                  <label className="form-color">
                    <h6>Company</h6>

                    <Form.Check
                      aria-label="option 1"
                      name="profileType"
                      className="form-control mb-3"
                      type="checkbox"
                      required
                      value="company"
                      onChange={(e) => setProfileType(e.target.value)}
                    />
                  </label>{" "}
                  <label className="form-color">
                    <h6>Employee</h6>
                    <Form.Check
                      aria-label="option 2"
                      name="profileType"
                      className="form-control mb-3"
                      type="checkbox"
                      required
                      value="employee"
                      onChange={(e) => setProfileType(e.target.value)}
                    />
                  </label>{" "}
                  <div className="photo">
                    {uploading ? (
                      <label className="form-color">
                        <Spinner
                          className="profile-photo-spinner"
                          animation="border"
                          role="status"
                        ></Spinner>
                      </label>
                    ) : (
                      <label htmlFor="file-input">
                        Add Photo
                        <CameraAltOutlined className="user-photo" />
                      </label>
                    )}
                    <input //upload profile photo
                      type="file"
                      id="file-input"
                      className="upload_profile-photo-input"
                      onChange={uploadPhoto}
                    />
                  </div>
                </div>
              </div>
              {checkProfile.length > 1 && (
                <div className="bg-danger text-white p-2 my-2 text-center">
                  {checkProfile}
                </div>
              )}
              <div className="auth-actions-ui col-12">
                <button
                  type="button"
                  className="btn  btn-success  btn-sm"
                  onClick={handleSubmit}
                  mt={3}
                >
                  {" "}
                  Submit
                </button>{" "}
                <Link
                  to="/login"
                  className=" bottom-0 col-10 col-md-5 text-end"
                >
                  <div></div>
                  have an Account? Login
                </Link>
                {/* <Google
                  userName={userName}
                  email={email}
                  password={password}
                  profileType={profileType}
                  photo={photo}
                  setCheckProfile={setCheckProfile}
                /> */}
              </div>
            </form>
          )}
        </>
      )}
    </div>
  )
}

export default Register;
