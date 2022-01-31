import "./profile.css";
import React, { useContext } from "react";
import { authContext } from "../../context/auth_context/authContext";
import CompanyProfile from "../company/CompanyProfile";
import CadidateProfile from "../candidate/CadidateProfile";
function Profile({ showOverlay, setShowOverlay }) {
  const { user } = useContext(authContext);
  // const user = {
  //   profileType: "company",

  // };
  // user?.profileType === "company";
  return (
    <div className=" profile-parent">
      {true && (
        <CompanyProfile
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      )}
      {user?.profileType === "employee" && (
        <CadidateProfile
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
      )}
    </div>
  );
}

export default Profile;
