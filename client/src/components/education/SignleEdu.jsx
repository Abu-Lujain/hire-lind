import React, { useState } from "react";
import AddBox from "@material-ui/icons/AddBox";

import { MoreVertRounded, CloseSharp } from "@material-ui/icons";
import { useContext } from "react";
import { profileContext } from "../../context/profile_context/profileContext";
// import MoreVertRounded className="icon" from '@mui/icons-material/MoreVert';
function SingleEdu({ adding }) {
  const { profile } = useContext(profileContext);
  const [openOption, setOpenOption] = useState(null);
  // const handleDelete = async (id) => {

  // };
  function openOptionHandler(exp) {
    setOpenOption(exp?._id && exp._id);
  }
  return (
    <>
      {profile?.education?.length <= 0 ? (
        <div className="no-experience-message">
          <h3 className="text-danger mt-3"> you haven't added any eduaction</h3>
          <small className="text-muted">
            please add some education, if you have
          </small>
          {adding}
          <p className="text-success m-3">
            Your Education helps attract employers and get a better job
          </p>
        </div>
      ) : (
        profile?.education &&
        profile?.education?.map((exp) => {
          return (
            <div className="experience" key={exp._id}>
              <div
                className="options position-absolute "
                onClick={(e) => {
                  openOptionHandler(exp);
                }}
              >
                <MoreVertRounded className="icon" />{" "}
              </div>
              {openOption === exp._id && (
                <div className="options-menu ">
                  <li className="edit ">Edit</li>
                  <li className="del">Delete</li>
                  <li className="send-to-chat">Send to chat</li>
                  <CloseSharp
                    onClick={() => setOpenOption(null)}
                    className="close-option-menu"
                  />
                </div>
              )}
              <h5 className="co-name">
                <span className="preffix">Co:</span> {exp.company}
              </h5>
              <div className="role">
                <span className="preffix">Role:</span> {exp.title}
              </div>
              <div className="role">
                <span className="preffix">location:</span> {exp.loc}
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
                Show experience Statement{" "}
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default SingleEdu;
