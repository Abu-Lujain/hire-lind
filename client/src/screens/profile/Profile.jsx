import "./profile.css";
import React, { useContext, useState, useEffect } from "react";
import AddBox from "@material-ui/icons/AddBox";

import axios from "axios";
// import profile from "../../assets/profile.jpg";
import { Facebook, YouTube, Twitter, Instagram } from "@material-ui/icons";
import Skills from "../../components/skills/Skills";
import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import { authContext } from "../../context/authContext";

function Profile({ user }) {
  const [editProfile, setEditProfile] = useState(true);
  const [profile, setProfile] = useState([]);
  // const { user } = useContext(authContext);

  // loading profile
  // console.log(profile);
  useEffect(async () => {
    const res = await axios.post("/dev_profiles");
    setProfile(res.data);
  }, []);

  console.log(profile);
  return (
    <div className="profile-parent row">
      <div className="profile-info  col col-md-3">
        <div className="img-container">
          <img
            className="img-fluid profile-img"
            /*src={profile}*/ alt="profile photo"
          />
        </div>
        <form>
          <div className="user-name">
            <h6>{user != null && user.userName}</h6>

            {editProfile ? (
              <label>
                what is your title?
                <input type="text" name="title" />
              </label>
            ) : (
              <h4>Frontend Web Developer</h4>
            )}
          </div>
          <div className="about-me-parent">
            <h5>about me</h5>
            {editProfile ? (
              <label>
                write some about yourself
                <textarea type="text" name="boi" />
              </label>
            ) : (
              <p className="about-me">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto deleniti porro quia doloribus? Voluptatum expedita
                commodi numquam iste ipsum animi.
              </p>
            )}
          </div>
          {/* <Skills /> */}
        </form>
      </div>

      <Experience profile={profile} setProfile={setProfile} />

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
}

export default Profile;
