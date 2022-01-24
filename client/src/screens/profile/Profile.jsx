import "./devProfile.css";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Facebook, YouTube, Twitter, Instagram } from "@material-ui/icons";
import CoProfile from "./CoProfile";
import DevProfile from "./DevProfile";
import { createProfile, fetchProfile } from "../../api_Calls/profileCalls";
import { authContext } from "../../context/auth_context/authContext";
import { profileContext } from "../../context/profile_context/profileContext";

function Profile() {
  const { profile, dispatch } = useContext(profileContext);
  const { user } = useContext(authContext);
  useEffect(() => {
    // making initial profile
    createProfile(dispatch);
    // fetching the profile
    fetchProfile(dispatch);
  }, [dispatch]);

  return (
    <div className=" profile-parent">
      {!user ? (
        <div className="profiles-options ">
          <div className="new-user-msg bg-dark m-5">
            <h1 className="text-warning">
              please Register first to be able to create your profile
            </h1>
            <h3 className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, a laboriosam natus soluta tempora ipsum quaerat eum
              deleniti quas iusto.
            </h3>
            <h4 className="text-light">
              <Link to="/register">Create an account</Link>
            </h4>
          </div>
        </div>
      ) : (
        <>
          <>
            {user?.profileType === "company" && <CoProfile profile={profile} />}
            {user?.profileType === "employee" && <DevProfile />}
          </>
        </>
      )}
    </div>
  );
}

export default Profile;
