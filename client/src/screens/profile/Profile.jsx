import "./profile.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { Facebook, YouTube, Twitter, Instagram } from "@material-ui/icons";
import CoProfile from "./CoProfile";
import DevProfile from "./DevProfile";
import { authContext } from "../../context/auth_context/authContext";
import { profileContext } from "../../context/profile_context/profileContext";
import { Spinner } from "react-bootstrap";
function Profile() {
  const [initializing, setInitializing] = useState(true);
  const { isFetching } = useContext(profileContext);
  const { user, loading } = useContext(authContext);
  setTimeout(() => setInitializing(false));
  return (
    <div className=" profile-parent">
      {isFetching ? (
        <div className="container spinner-parent">
          <Spinner
            className="load-profile-spinner"
            animation="grow"
            role="status"
          ></Spinner>
          <h5 className="text-muted">Loading profile...</h5>
        </div>
      ) : (
        <>{user?.profileType === "company" && <CoProfile />}</>
      )}
      {initializing ? (
        <div className="container spinner-parent">
          <Spinner
            className="load-profile-spinner"
            animation="grow"
            role="status"
          ></Spinner>
          <h5 className="text-muted">initializing....</h5>
        </div>
      ) : (
        <>{user?.profileType === "employee" && <DevProfile />}</>
      )}
    </div>
  );
}

export default Profile;
