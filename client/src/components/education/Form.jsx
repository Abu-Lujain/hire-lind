import React from "react";
import { useState } from "react";

function Form({ addEdu, setAddEdu }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [description, setDescription] = useState("");
  const eduObj = {
    school,
    degree,
    from,
    to,
    description,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(eduObj);
  };
  return (
    <form className="education-form" onSubmit={handleSubmit}>
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
  );
}

export default Form;
