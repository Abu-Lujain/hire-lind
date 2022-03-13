import "./styles/slider.css"
import CloseSharp from "@material-ui/icons/CloseSharp"
import MoreVertRounded from "@material-ui/icons/MoreVertRounded"
import { Link } from "react-router-dom"
function Authorized({
  job,
  user,
  company,
  openOption,
  setOpenOption,
  deleteJobHandler,
}) {
  return (
    <>
      {(company?.user === job?.company || user?.isAdmin) && (
        <div className="drop-menu">
          <div className="latest-jobs-options">
            <MoreVertRounded
              className="icon"
              onClick={() => setOpenOption(job._id)}
            />{" "}
          </div>
          {openOption === job._id && (
            <div className="options-menu ">
              <Link className="link text-dark" to={`edit/${job._id}`}>
                <li className="edit ">Edit</li>{" "}
              </Link>
              <li className="del" onClick={() => deleteJobHandler(job._id)}>
                Delete
              </li>
              <CloseSharp
                className="close-option-menu"
                onClick={() => setOpenOption(null)}
              />
            </div>
          )}{" "}
        </div>
      )}
    </>
  )
}

export default Authorized
