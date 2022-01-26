import "./coProfile.css";
import React from "react";
import { createProfile } from "../../api_Calls/companyCall";
import { useContext } from "react";
import { companyContext } from "../../context/company_context/companyContext";
import { useEffect } from "react";

function CoProfile() {
  const { dispatch, company } = useContext(companyContext);
  useEffect(() => {
    createProfile(dispatch);
  }, [dispatch]);
  console.log(company);
  return (
    <div className="co-proifle row">
      <h2>this is from comapy profile</h2>
      <h2>this is from comapy profile</h2>
      <h2>this is from comapy profile</h2>
      <h2>this is from comapy profile</h2>
    </div>
  );
}

export default CoProfile;
