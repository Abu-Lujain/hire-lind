import React from "react";
import "./join.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { logOut } from "../../api_Calls/authCalls";
import { authContext } from "../../context/auth_context/authContext";
function Join() {
  const { user, dispatch } = useContext(authContext);
  return (
    <div className=" join d-md-none d-lg-block d-lg-none .d-xl-block d-md-none .d-lg-block">
      {user === null ? (
        <>
          {" "}
          <Link to="login" className="link log-in ">
            Log in
          </Link>{" "}
          <Link to="register" className="link sign-up">
            Sign up
          </Link>
        </>
      ) : (
        <>
          <Link to="settings">settings</Link>
          <Link to="me">profile</Link>
          <span className="span " onClick={() => logOut(dispatch)}>
            Logout
          </span>{" "}
        </>
      )}
    </div>
  );
}

export default Join;
