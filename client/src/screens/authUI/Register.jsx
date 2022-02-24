// import { Link, Redirect } from "react-router-dom";
import "./register.css";
import { useState, useContext, useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { registerCall } from "../../api_Calls/authCalls"
import { authContext } from "../../context/auth_context/authContext"
import { Spinner, Form } from "react-bootstrap"
import axios from "axios"
import { CameraAltOutlined } from "@material-ui/icons"

const Register = () => {
  const checkRef = useRef()
  const { user, loading, dispatch, token } = useContext(authContext)
  const [userName, setuserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [photo, setPhoto] = useState("")
  const [uploading, setUploading] = useState(false)
  const [profileType, setProfileType] = useState("")
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
      const res = await axios.post("/uploads", formData, config)
      if (res.data) {
        setPhoto(res.data)
        setUploading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  /////////
  console.log(photo)
  const body = { userName, email, password, profileType, isAdmin: true, photo }

  const handleSubmit = async (e) => {
    e.preventDefault()
    registerCall(body, dispatch)
    console.log(token)
    token && window.location.replace("/")
  }

  return (
    <div className="register row">
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
        <form className=" col-10 col-md-5" onSubmit={handleSubmit}>
          {" "}
          {profileType === "company" && (
            <small className="register-note">
              this will be the name of your company <span></span>
            </small>
          )}
          <h5 className="text-center text-primary">create and account</h5>
          <div className="form-group">
            <label>name</label>
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
            <label>email</label>

            <input
              className="form-control my-3"
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>password</label>{" "}
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
              <label>
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
              <label>
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
                  <label>
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
              {/* <label>
                <h6>Both</h6>
                <Form.Check
                  aria-label="option 3"
                  name="profileType"
                  className="form-control mb-3"
                  type="checkbox"
                  required
                  value="both"
                  onChange={(e) => setProfileType(e.target.value)}
                />
              </label>{" "} */}
            </div>
          </div>
          <div className="auth-actions-ui row ">
            <div className="col-12 col-md-5">
              <button
                type="button"
                className="btn  btn-success  btn-sm"
                onClick={handleSubmit}
                mt={3}
              >
                {" "}
                Submit
              </button>
            </div>
            <Link to="/login" className=" bottom-0 col-10 col-md-5 text-end">
              <div>
                {/* {errors &&
            errors.map((err) => (
              <span className="text-danger">{err.msg} </span>
            ))} */}
              </div>
              have an Account? Login
            </Link>
          </div>
        </form>
      )}
    </div>
  )
}

export default Register;
