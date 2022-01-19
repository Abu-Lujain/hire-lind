// import { Link, Redirect } from "react-router-dom";
import "./register.css";
import { useState, useContext } from "react";
import axios from "axios";
import { authContext } from "../../context/authContext";
import { registerCall } from "../../helpers/apiCalls";
const Register = () => {
  const { token, user, loading, dispatch, errors } = useContext(authContext);
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    console.log(errors);
    console.log(user);
    console.log(token);
    // if ((errors = !null)) {
    //   errors.forEach((err) => console.log(err.msg));
    // }
    e.preventDefault();
    registerCall({ userName, email, password }, dispatch);
    
  };

  return (
    <div className="mt-5  d-flex justify-content-center position-relative ">
      <a href="/login" className=" position-absolute bottom-0 ">
        <div>
          {/* {errors &&
            errors.map((err) => (
              <span className="text-danger">{err.msg} </span>
            ))} */}
        </div>
        <h4 className="font-weight-normal">have an account? Login</h4>
      </a>
      <form className=" w-50" onSubmit={handleSubmit}>
        <h3 className="text-center ">create and account</h3>
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

        <button
          type="button"
          className="btn  btn-success"
          onClick={handleSubmit}
          mt={3}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
