import React, { useState, useRef } from "react";
import axios from "axios";
import AddBox from "@material-ui/icons/AddBox";
import {
  SentimentDissatisfiedRounded,
  MoreVertRounded,
} from "@material-ui/icons";
import { useEffect } from "react";
// import MoreVertRounded className="icon" from '@mui/icons-material/MoreVert';
function SingleExp({
  setProfile,
  profile,
  addExp,
  setAddExp,
  adding,
  no_experience,
}) {
  const [openOption, setOpenOption] = useState(false);
  const [elData, setElData] = useState("");
  const [targetId, setTargetId] = useState(null);
  const [expId, setExpId] = useState("");
  const exp_ref = useRef();
  const optionsClick = (e, exp, index) => {
    // for(let i = 0; i<=index.length)
    index.toString() === e.target.id && setOpenOption(!openOption);
    console.log(exp.length);
  };

  const handleDelete = async (id) => {
    setOpenOption(false);
    const res = await axios.delete("/dev_profiles/experience/" + id);
    console.log(res.data);
    setProfile(res.data);
    console.log(openOption);
  };
  return (
    <>
      {no_experience ? (
        <div className="no-experience-message">
          {!addExp && (
            <>
              <h3 className="text-danger mt-3"> you don't have experience</h3>
              <p className="text-muted m-3">
                the experiences you add will appear here
              </p>
              {adding}
            </>
          )}
        </div>
      ) : (
        !no_experience &&
        profile?.experience?.map((exp, index) => {
          return (
            <div className="experience " key={exp._id} ref={exp_ref}>
              <div className="options position-absolute">
                <MoreVertRounded
                  id={index}
                  onClick={(e) => optionsClick(e, exp, index)}
                  className="icon"
                />{" "}
              </div>
              {openOption && (
                <div className="options-menu">
                  <li className="edit">Edit</li>
                  <li className="delete" onClick={() => handleDelete(exp._id)}>
                    Delete
                  </li>
                  <li className="send-to-chat">Send to chat</li>
                </div>
              )}
              <h5 className="co-name">
                <span className="preffix">Co:</span> {exp.company}
              </h5>
              <div className="role">
                <span className="preffix">Role:</span> {exp.title}
              </div>
              <div className="from">
                <span className="preffix">From:</span> {exp.from}
              </div>
              <div className="to">
                <span className="preffix">To: </span> {exp.to}
              </div>
              <div>
                <span> description: </span>
                {exp.description}
              </div>
              <div className="experience-statement">
                Show Experience Statement
              </div>
              <span>{expId}</span>
              <br />
              <span>{targetId}</span>
            </div>
          );
        })
      )}
    </>
  );
}

export default SingleExp;
