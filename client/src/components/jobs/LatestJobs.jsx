import "./styles/latestJobs.css";
import { MoreVertRounded, CloseSharp } from "@material-ui/icons"
import profile from "../../assets/profile.jpeg"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useContext } from "react"
// import { jobContext } from "../../context/job_context/jobContext"
import { authContext } from "../../context/auth_context/authContext"
import { companyContext } from "../../context/company_context/companyContext"
import { profileContext } from "../../context/profile_context/profileContext"
// import { getAllJobs } from "../../api_Calls/jobCalls";
function LatestJobs() {
  const [openOption, setOpenOption] = useState(null)
  const { user } = useContext(authContext)
  const { company } = useContext(companyContext)
  const { profile } = useContext(profileContext)

  const [delMsg, setDelMsg] = useState("")
  const [deletedJob, setDeletedJob] = useState("")
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    async function fetchjobs(params) {
      try {
        const res = await axios.get("/jobs")
        setJobs(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchjobs()
  }, [deletedJob])
  console.log(!profile)
  const deleteJobHandler = async (id) => {
    try {
      const res = await axios.delete(`/jobs/job/${id}`)
      setDeletedJob(res.data)
      setDeletedJob(null)
      setDelMsg(res.data)
      setTimeout(() => {
        setDelMsg("")
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="mt-2 row m-auto ">
      <h4 className="job-list-title col-12">Latest jobs</h4>

      {/* ###################### */}
      <div className="latest-jobs  col-12 ">
        {<div className="msg">{delMsg}</div>}
        {jobs &&
          jobs.map((job) => {
            console.log(company?.user === job?.company)
            return (
              <div
                className="job-container row  col-12 position-relative"
                key={job._id}
              >
                <Link
                  to={`/company/${job.company}`}
                  className="link company-name"
                >
                  {job.companyName}
                </Link>{" "}
                {(company?.user === job?.company ||
                  (user?.isAdmin && !profile)) && (
                  <>
                    <div className="options position-absolute ">
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
                        <li
                          className="del"
                          onClick={() => deleteJobHandler(job._id)}
                        >
                          Delete
                        </li>
                        <CloseSharp
                          className="close-option-menu"
                          onClick={() => setOpenOption(null)}
                        />
                      </div>
                    )}{" "}
                  </>
                )}
                {/* <span className="job-marker">Vacant</span> */}
                <div className="logo-container col-2">
                  <img src={profile} alt="logo" className="logo" />{" "}
                </div>
                <div className="job-title-container col-10 m-auto row">
                  <h6 className="job-title col-11">
                    <small className="text-primary">{job.shift}: </small>
                    {job.title}
                  </h6>{" "}
                </div>
                <span className="salary">
                  <span className="text-primary">Salary: </span>
                  {job.salary} $ per month
                </span>
                <p className="description col-11 text-muted ">
                  {job.description}
                </p>
                <div className="footer  col-12">
                  <span>{job.createdAt}</span>
                  <button className=" details">
                    {" "}
                    <Link className="link" to={`job/${job._id}`}>
                      Details
                    </Link>
                  </button>
                  <button className="apply">Appy</button>
                </div>
              </div>
            )
          })}
      </div>
      {/* ###################### */}
    </div>
  )
}

export default LatestJobs;
