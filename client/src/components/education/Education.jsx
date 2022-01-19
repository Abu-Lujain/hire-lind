import React, { useState } from "react";
import AddBox from "@material-ui/icons/AddBox";

import "./education.css";
import Form from "./Form";
function Education() {
  const [addEdu, setAddEdu] = useState(false);
  return (
    <div className="education-parent bg-light  col-12 col-md-4">
      <div className="edu-header">
        <h3 className="experience-title">My Education</h3>
        <span onClick={() => setAddEdu(!addEdu)} className="add-edu-parent">
          {" "}
          Add Education{" "}
          <AddBox onClick={() => setAddEdu(!addEdu)} className="add-edu" />
        </span>
      </div>
      {addEdu && <Form setAddEdu={setAddEdu} addEdu={addEdu} />}

      <div className="formal-education-parent">
        <h5 className="formal-education-title">Formal Education</h5>
        <div className="education">
          <h6 className="degree">Master Degree</h6>
          <div className="uni">
            University of Holy Quran and Islamic Sciences
          </div>
          <div className="college">College of Languages - Enlgish</div>
          <div className="from-to">
            <span className="from">From: 2015 </span>
            <span className="to">To: 2021</span>
          </div>
        </div>
        <div className="view-certificate">view Certificate</div>
      </div>
      <h5 className="informal-education-title">Informal Education</h5>
    </div>
  );
}

export default Education;
