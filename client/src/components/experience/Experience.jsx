import React, { useState } from "react";
import "./experience.css";
import AddBox from "@material-ui/icons/AddBox";
import SingleExp from "./SingleExp";
import { addExperince } from "../../api_Calls/profileCalls";
import { useContext } from "react";
import { profileContext } from "../../context/profile_context/profileContext";
function Experience({}) {
  const { dispatch, profile } = useContext(profileContext);
  const [addExp, setAddExp] = useState(false);
  const [authError, setAuthError] = useState([]);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [loc, setLoc] = useState("");
  const [to, setTo] = useState("");
  const [stillWorking] = useState(false);
  const [description, setDescription] = useState("");
  const body = {
    stillWorking,
    company,
    loc,
    title,
    from,
    to,
    description,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    addExperince(body, dispatch);
    setCompany("");
    setDescription("");
    setTitle("");
    setFrom("");
    setTo("");
    setLoc("");
    setAddExp(!addExp);
  };
  let adding = (
    <span onClick={() => setAddExp(!addExp)} className="add-exp-parent mb-1">
      Add <AddBox onClick={() => setAddExp(!addExp)} className="add-edu" />
    </span>
  );

  return (
    <div className="experience-parent m-auto col-11 col-md-4 row">
      <div className="exp-header">
        <h3 className="experience-title">My Experiences</h3>
        {profile?.experience?.length > 0 ? adding : ""}
      </div>

      {addExp && ( //   @styled with in educatin.css
        <form className="education-form col-11 row" onSubmit={handleSubmit}>
          <div className="col-12">
            <label className="col-3 col-sm-12">company</label>
            <input
              onChange={(e) => setCompany(e.target.value)}
              className="col-8 col-sm-12"
              type="text"
              name="company"
            />
          </div>
          <div className="col-12">
            <label className="col-3 col-sm-12">location</label>
            <input
              onChange={(e) => setLoc(e.target.value)}
              className="col-8 col-sm-12"
              type="text"
              name="loc"
              placeholder="where was the compnay based?"
            />
          </div>
          <div className="col-12">
            <label className="col-3 col-sm-12">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="col-8 col-sm-12"
              type="text"
              name="title"
              placeholder="what role you had?"
            />
          </div>

          <div className="col-12">
            <label className="col-3 col-sm-12">From</label>
            <input
              onChange={(e) => setFrom(e.target.value)}
              className="col-8 col-sm-12"
              type="date"
              name="form"
            />
          </div>
          <div className="col-12">
            <label className="col-3 col-sm-12">To</label>
            <input
              onChange={(e) => setTo(e.target.value)}
              className="col-8 col-sm-12"
              type="date"
              name="to"
            />
            {/* <span className="toggler">
              <span className="toggle">working</span>
            </span> */}
          </div>

          <div className="col-12">
            <label className="col-3 col-sm-12">Description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="col-8 col-sm-12"
              type="text"
              name="description"
            />
          </div>
          <div className="col-12 action">
            <input
              value={"add Experience"}
              className="btn btn-sm btn-success adding-btn"
              type="submit"
            />
            <button
              onClick={() => setAddExp(!addExp)}
              className="btn btn-sm btn-danger"
            >
              concel
            </button>
          </div>
          {authError &&
            authError.map((arr) => (
              <h5 className="text-center text-danger p-2" key={arr.msg}>
                {arr.msg}
              </h5>
            ))}
        </form>
      )}

      {/* ################### */}
      {/* ################### */}

      <SingleExp setAddExp={setAddExp} addExp={addExp} adding={adding} />
    </div>
  );
}

export default Experience;
