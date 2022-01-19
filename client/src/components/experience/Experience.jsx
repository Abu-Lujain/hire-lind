import React, { useState, useEffect } from "react";
import "./experience.css";
import AddBox from "@material-ui/icons/AddBox";
import ExpForm from "./ExpForm";
import axios from "axios";
import SingleExp from "./SingleExp";
function Experience({ profile, setProfile }) {
  const [addExp, setAddExp] = useState(false);
  const [authError, setAuthError] = useState([]);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [loc, setLoc] = useState("");
  const [to, setTo] = useState("");
  const [stillWorking, setStillWorking] = useState(false);
  const [description, setDescription] = useState("");
  const expObj = {
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
    console.log(expObj);
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    };
    try {
      const res = await axios.put("/dev_profiles/experience", expObj, config);
      res.data && setProfile(res.data);
      res.data && setAddExp(!addExp);
    } catch (error) {
      if (error) return;
      const errors = error.response.data.errors;
      errors && setAuthError(errors);
      console.log(authError);
    }
  };
  let adding = (
    <span onClick={() => setAddExp(!addExp)} className="add-exp-parent mb-1">
      Add <AddBox onClick={() => setAddExp(!addExp)} className="add-edu" />
    </span>
  );
  const no_experience = profile?.experience?.length <= 0;
  return (
    <div className="experience-parent col-12 col-md-4">
      <div className="exp-header">
        <h3 className="experience-title">My Experiences</h3>
        {no_experience ? "" : adding}
      </div>

      {addExp && ( //   @styled with in educatin.css
        <form className="education-form" onSubmit={handleSubmit}>
          <div>
            <label>company</label>
            <input
              onChange={(e) => setCompany(e.target.value)}
              className="input"
              type="text"
              name="company"
            />
          </div>
          <div>
            <label>location</label>
            <input
              onChange={(e) => setLoc(e.target.value)}
              className="input"
              type="text"
              name="title"
              placeholder="where was the compnay based?"
            />
          </div>
          <div>
            <label>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="input"
              type="text"
              name="title"
              placeholder="what role you had?"
            />
          </div>

          <div>
            <label>From</label>
            <input
              onChange={(e) => setFrom(e.target.value)}
              className="input"
              type="date"
              name="form"
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
            <span className="toggler">
              <span className="toggle">working</span>
            </span>
          </div>

          <div>
            <label>Description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="date"
              type="text"
              name="description"
            />
          </div>
          <div className="action">
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

      <SingleExp
        profile={profile}
        setAddExp={setAddExp}
        addExp={addExp}
        adding={adding}
        setProfile={setProfile}
        no_experience={no_experience}
      />
    </div>
  );
}

export default Experience;
