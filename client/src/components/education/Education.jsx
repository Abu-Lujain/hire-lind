import React, { useState } from "react";
import AddBox from "@material-ui/icons/AddBox";
import "./education.css";
import { addEducation } from "../../api_Calls/profileCalls";
import { useContext } from "react";
import { profileContext } from "../../context/profile_context/profileContext";
import SingleEdu from "./SignleEdu";
function Education() {
  const { dispatch, profile } = useContext(profileContext);
  const [addEdu, setAddEdu] = useState(false);
  // const [authError, setAuthError] = useState([]);

  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [loc, setLoc] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");
  const body = {
    school,
    degree,
    from,
    to,
    loc,
    description,
  };
  const handleAddEducation = (e) => {
    e.preventDefault();
    addEducation(body, dispatch);
    setAddEdu(!addEdu);
    setSchool("");
    setDegree("");
    setFrom("");
    setTo("");
    setDescription("");
  };
  let adding = (
    <span onClick={() => setAddEdu(!addEdu)} className="add-exp-parent mb-1">
      Add <AddBox className="add-edu" />
    </span>
  );
  return (
    <div className="education-parent  m-auto mt-5  col-11 col-md-4">
      <div className="edu-header">
        <h3 className="experience-title">My Education</h3>
        {profile?.education?.length > 0 && adding}
      </div>
      {addEdu && (
        <form className="education-form" onSubmit={handleAddEducation}>
          <div>
            <label>school</label>
            <input
              onChange={(e) => setSchool(e.target.value)}
              className="input"
              type="text"
              name="school"
            />
          </div>
          <div>
            <label>Degree</label>
            <input
              onChange={(e) => setDegree(e.target.value)}
              className="input"
              type="text"
              name="degree"
            />
          </div>
          <div>
            <label>Location</label>
            <input
              onChange={(e) => setLoc(e.target.value)}
              className="input"
              type="text"
              name="degree"
            />
          </div>

          <div>
            <label>From</label>
            <input
              onChange={(e) => setFrom(e.target.value)}
              className="input"
              type="date"
              name="loc"
            />
          </div>
          <div>
            <label>To</label>
            <input
              onChange={(e) => setTo(e.target.value)}
              className="date"
              type="date"
              name="to"
            />
          </div>

          <div>
            <label>Description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="date"
              type="text"
              name="desciption"
            />
          </div>
          <div className="action">
            <input
              className="btn btn-sm btn-success adding-btn"
              value={"add Education"}
              type="submit"
            />
            <button
              onClick={() => setAddEdu(!addEdu)}
              className="btn btn-sm btn-danger"
            >
              concel
            </button>
          </div>
        </form>
      )}
      <SingleEdu adding={adding} addEdu={addEdu} />
    </div>
  );
}

export default Education;
