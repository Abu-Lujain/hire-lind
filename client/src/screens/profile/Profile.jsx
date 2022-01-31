import "./profile.css";
import React, { useContext } from "react";
import { authContext } from "../../context/auth_context/authContext";
import CompanyProfile from "../company/CompanyProfile";
import CadidateProfile from "../candidate/CadidateProfile";
function Profile() {
  const { user } = useContext(authContext);
  // const user = {
  //   profileType: "company",

  // };
  return (
    <div className=" profile-parent">
      {user?.profileType === "company" && <CompanyProfile />}
      {user?.profileType === "employee" && <CadidateProfile />}
    </div>
  );
}

export default Profile;
