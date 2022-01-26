// import { Link, Redirect } from "react-router-dom";
import "./register.css";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { registerCall } from "../../api_Calls/authCalls";
import { authContext } from "../../context/auth_context/authContext";
import { Spinner } from "react-bootstrap";
const Register = () => {
  const { token, user, loading, dispatch, errors } = useContext(authContext);
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileType, setProfileType] = useState("");
  console.log("token: ", token);
  console.log("user: ", user);
  console.log("loading: ", loading);
  console.log("errors: ", errors);
  const handleSubmit = async (e) => {
    // if ((errors = !null)) {
    //   errors.forEach((err) => console.log(err.msg));
    // }
    e.preventDefault();
    registerCall({ userName, email, password, profileType }, dispatch);
  };

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
            <div className="form-group profile-type">
              <label>
                <h6>Company</h6>

                <input
                  name="profileType"
                  className="form-control mb-3"
                  type="checkbox"
                  required
                  checked
                  value="company"
                  onChange={(e) => setProfileType(e.target.value)}
                />
              </label>{" "}
              <label>
                <h6>Employee</h6>
                <input
                  name="profileType"
                  className="form-control mb-3"
                  type="checkbox"
                  required
                  value="employee"
                  onChange={(e) => setProfileType(e.target.value)}
                />
              </label>{" "}
              <label>
                <h6>Both</h6>
                <input
                  name="profileType"
                  className="form-control mb-3"
                  type="checkbox"
                  required
                  checked
                  value="both"
                  onChange={(e) => setProfileType(e.target.value)}
                />
              </label>{" "}
            </div>
            <h1>{profileType}</h1>
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
  );
};

export default Register;
