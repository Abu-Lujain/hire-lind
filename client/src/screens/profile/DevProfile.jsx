import React, { useState, useContext } from "react";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import { EditSharp } from "@material-ui/icons";
import { updateProfile } from "../../api_Calls/profileCalls";
import { profileContext } from "../../context/profile_context/profileContext";
import { authContext } from "../../context/auth_context/authContext";

const DevProfile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [bio, setBio] = useState("");
  const [title, setTitle] = useState("");

  const { user } = useContext(authContext);
  const { dispatch, profile } = useContext(profileContext);
  // update profile
  const body = { bio, title };
  const handleUpdate = async (e) => {
    updateProfile(body, dispatch);
    console.log("updated: ", profile);
  };
  return (
    <div className="dev-profile  row">
      <div className="profile-info col-md-3">
        <div className="img-container">
          <img className="img-fluid profile-img" alt="" />
        </div>
        <form className="profile-init col-11 mb-3 row" onSubmit={handleUpdate}>
          <div className="user-name col-12">
            <h6>{user?.userName && user.userName}</h6>
            {!editProfile && (
              <span
                className=" edit-btn"
                onClick={() => setEditProfile(!editProfile)}
              >
                <EditSharp />
              </span>
            )}
            {editProfile ? (
              <div className="col-12">
                <label>what is your title?</label>
                <input
                  className="w-100"
                  value={profile.title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                />
              </div>
            ) : (
              <h4>{profile?.title && profile.title}</h4>
            )}
          </div>
          {editProfile ? (
            <div className="col-12">
              <label>write some about yourself </label>
              <textarea
                value={profile?.boi && profile.boi}
                onChange={(e) => setBio(e.target.value)}
                type="text"
                name="bio"
              />
            </div>
          ) : (
            <div className="about-me-parent ">
              <h5 className="about-me-title">about me</h5>
              <p className="about-me">{profile?.bio && profile?.bio}</p>
            </div>
          )}
          {/* <Skills /> */}
          {editProfile && (
            <div className="align-items">
              <button className="btn btn-primary btn-sm">Add</button>
              <span
                className="btn btn-danger btn-sm"
                onClick={() => setEditProfile(!editProfile)}
              >
                concel
              </span>
            </div>
          )}
        </form>
      </div>

      <Experience profile={profile} />

      <Education profile={profile} />

      {/* {res.data.education.length === 0 && <Education profile={profile} />} */}

      {/* <div className="social-media-parent  list-unstyled">
          <h5>check me on:</h5>
          <li>
          <Facebook className="social-media-icon f" /> <span>Abu-Lujain</span>{" "}
          <span>300k</span>
      </li>
      <li>
      <YouTube className="social-media-icon y" />
      <span>Abu-Lujain</span> <span>300k</span>
      </li>
      <li>
      <Twitter className="social-media-icon t" />
      <span>Abu-Lujain</span> <span>40k</span>
      </li>
      <li>
        <Instagram className="social-media-icon tel" />
        <span>Abu-Lujain</span> <span>134k</span>
        </li>
      </div> */}
    </div>
  );
};

export default DevProfile;
