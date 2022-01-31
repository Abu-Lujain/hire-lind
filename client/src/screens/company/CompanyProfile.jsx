import "./company.css";
import React from "react";
import { createProfile } from "../../api_Calls/companyCall";
import { useContext } from "react";
import { companyContext } from "../../context/company_context/companyContext";
import { useEffect } from "react";

import CompanyHeader from "../../components/company_components/CompanyHeader";
import CompanyMiddle from "../../components/company_components/CompanyMiddle";
import AboutCompany from "../../components/company_components/AboutCompany";
import OtherOffers from "../../components/company_components/OtherOffers";

function CompanyProfile({ showOverlay, setShowOverlay }) {
  const { dispatch, company } = useContext(companyContext);
  useEffect(() => {
    createProfile(dispatch);
  }, [dispatch]);
  console.log(company);
  return (
    <div className="co-proifle row ">
      {showOverlay && <div className="overlay"> </div>}
      <CompanyHeader
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
      <CompanyMiddle />
      {/* <OtherOffers /> */}
      {/* <AboutCompany /> */}
    </div>
  );
}

export default CompanyProfile;
