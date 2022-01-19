import React from "react";
import { useState } from "react";
import axios from "axios";

function ExpForm({ addExp, setAddExp }) {
  const [compay, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState("");
  const [loc, setLoc] = useState("");
  const [to, setTo] = useState("");
  const [stillWorking, setStillWorking] = useState(false);
  const [description, setDescription] = useState("");
  const expObj = {
    stillWorking,
    compay,
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
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    //   @styled with in educatin.css
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
          name="desciption"
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
    </form>
  );
}

export default ExpForm;
