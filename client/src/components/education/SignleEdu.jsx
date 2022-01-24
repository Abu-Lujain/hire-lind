import React, { useState } from "react";
import AddBox from "@material-ui/icons/AddBox";

import { MoreVertRounded, CloseSharp } from "@material-ui/icons";
import { useContext } from "react";
import { profileContext } from "../../context/profile_context/profileContext";
import { deleteEducation } from "../../api_Calls/profileCalls";
// import MoreVertRounded className="icon" from '@mui/icons-material/MoreVert';
function SingleEdu({ adding }) {
  const { profile, profileErrors, dispatch } = useContext(profileContext);
  const [openOption, setOpenOption] = useState(null);
  const [expPdf, setExpPdf] = useState(false);
  const handleDelete = async (id) => {
    deleteEducation(id);
  };
  function openOptionHandler(exp) {
    setOpenOption(exp?._id && exp._id);
  }
  console.log(profile, profileErrors);
  setTimeout(() => setExpPdf(false), 1000);
  return (
    <>
      {profile?.education?.length <= 0 ? (
        <>
          <div className="no-experience-message">
            <h3 className="text-danger mt-3">
              {" "}
              you haven't added any eduaction
            </h3>
            <small className="text-muted">
              please add some education, if you have
            </small>
            {adding}
            <p className="text-success m-3">
              Your Education helps attract employers and get a better job
            </p>
          </div>
        </>
      ) : (
        profile?.education &&
        profile?.education?.map((edu) => {
          return (
            <div className="experience" key={edu._id}>
              <div
                className="options position-absolute "
                onClick={(e) => {
                  openOptionHandler(edu);
                }}
              >
                <MoreVertRounded className="icon" />{" "}
              </div>
              {openOption === edu._id && (
                <div className="options-menu ">
                  <li className="edit ">Edit</li>
                  <li
                    className="del"
                    onClick={() => deleteEducation(edu._id, dispatch)}
                  >
                    Delete
                  </li>
                  <li className="send-to-chat">Send to chat</li>
                  <CloseSharp
                    onClick={() => setOpenOption(null)}
                    className="close-option-menu"
                  />
                </div>
              )}
              <div className="co-name">
                <span className="preffix">School or college:</span> {edu.school}
              </div>
              <div className="role">
                <span className="preffix">Degree:</span> {edu.degree}
              </div>
              <div className="role">
                <span className="preffix">location:</span> {edu.loc}
              </div>
              <div className="from">
                <span className="preffix">From:</span> {edu.from}
              </div>
              <div className="to">
                <span className="preffix">To: </span> {edu.to}
              </div>
              <div>
                <span> description: </span>
                {edu.description}
              </div>
              <div className="col-12 experience-statement">
                <btuuon
                  className=" btn-sm btn btn-info"
                  onClick={() => setExpPdf(true)}
                >
                  View pdf
                </btuuon>
                <button className="btn-sm btn btn-success">
                  {" "}
                  Download pdf
                </button>
              </div>
              {expPdf && (
                <h6 className="text-primary no_statement-msg m-2">
                  {" "}
                  coming soon, we are sorry!
                </h6>
              )}
            </div>
          );
        })
      )}
    </>
  );
}

export default SingleEdu;
