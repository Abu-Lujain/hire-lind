import React, { useState } from "react";
import { MoreVertRounded, CloseSharp } from "@material-ui/icons";
import { useContext } from "react";
import { profileContext } from "../../context/profile_context/profileContext";
import axios from "axios";
import { deleteExperience } from "../../api_Calls/profileCalls";
// import MoreVertRounded className="icon" from '@mui/icons-material/MoreVert';
function SingleExp({ adding, setAddExp }) {
  const { profile, dispatch } = useContext(profileContext);
  const [openOption, setOpenOption] = useState(null);
  // delete experience
  const handleDelete = async (id) => {
    deleteExperience(id, dispatch);
  };

  return (
    <>
      {profile?.experience?.length <= 0 ? (
        <div className="no-experience-message">
          <h3 className="text-danger mt-3"> you don't have experience</h3>
          <p className="text-muted m-3">
            the experiences you add will appear here
          </p>
          {adding}
        </div>
      ) : (
        profile?.experience &&
        profile?.experience?.map((exp) => {
          return (
            <div className="experience" key={exp._id}>
              <div className="options position-absolute ">
                <MoreVertRounded
                  className="icon"
                  onClick={() => setOpenOption(exp._id)}
                />{" "}
              </div>
              {openOption === exp._id && (
                <div className="options-menu ">
                  <li className="edit ">Edit</li>
                  <li className="del" onClick={() => handleDelete(exp._id)}>
                    Delete
                  </li>
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

export default SingleExp;
