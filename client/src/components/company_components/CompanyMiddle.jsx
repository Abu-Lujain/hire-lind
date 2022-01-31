import React from "react";
import CompanyContacts from "./CompanyContacts";
import LatestOffer from "./LatestOffer";
import Location from "./Location";

function CompanyMiddle() {
  return (
    <div className="middle col-11 col-md-12 row">
      <Location />
      <CompanyContacts />
      <LatestOffer />
    </div>
  );
}

export default CompanyMiddle;
