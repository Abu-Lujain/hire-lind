import React from "react";
import LatestOffer from "./LatestOffer";
import Location from "./Location";

function CompanyMiddle() {
  return (
    <div className="middle col-12 row">
      <Location />
      <LatestOffer />
    </div>
  );
}

export default CompanyMiddle;
