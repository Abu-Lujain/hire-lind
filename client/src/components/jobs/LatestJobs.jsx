//ui
import "./styles/latestJobs.css"
import { Link } from "react-router-dom"
//init
import { useEffect, useState, useContext } from "react"
//components
import Pagination from "./Pagination"
import Authorized from "./Authorized"
import JobTitle from "./JobTitle"
//others
import { formatDistance, subDays } from "date-fns"
//context
import { authContext } from "../../context/auth_context/authContext"
import { companyContext } from "../../context/company_context/companyContext"
import { axiosInstance } from "../../config/axiosInstance"
function LatestJobs() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)
  const [openOption, setOpenOption] = useState(null)
  const { user } = useContext(authContext)
  const { company } = useContext(companyContext)
  const [delMsg, setDelMsg] = useState("")
  const [deletedJob, setDeletedJob] = useState("")
  const [jobs, setJobs] = useState([])
  const [showNote, setShowNote] = useState(null)

  useEffect(() => {
    async function fetchjobs(params) {
      try {
        const res = await axiosInstance.get("/jobs")
        setJobs(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchjobs()
  }, [deletedJob])

  const deleteJobHandler = async (id) => {
    try {
      const res = await axiosInstance.delete(`/jobs/job/${id}`)
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
  // setting for pagination
  const indexOfLastJob = currentPage * itemsPerPage
  const indexOfFirstJob = indexOfLastJob - itemsPerPage
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)
  return (
    <div className="mt-2 row m-auto ">
      <h4 className="job-list-title col-12">Latest jobs</h4>
      <div className="latest-jobs  col-12 ">
        {delMsg && <div className="msg">{delMsg}</div>}
        {jobs &&
          currentJobs.map((job) => {
            return (
              <div
                className="job-container row  col-12 position-relative"
                key={job._id}
              >
                <div className="link job-title">{job.title} </div>{" "}
                <Authorized
                  job={job}
                  deleteJobHandler={deleteJobHandler}
                  user={user}
                  openOption={openOption}
                  company={company}
                  setOpenOption={setOpenOption}
                />
                {/* <span className="job-marker">Vacant</span> */}
                <div className="logo-container col-2">
                  <img
                    src={`http://localhost:8000${job?.companyLogo}`}
                    alt="logo"
                    className="logo"
                  />{" "}
                </div>
                <JobTitle
                  job={job}
                  setShowNote={setShowNote}
                  showNote={showNote}
                />
                <span className="salary">
                  {/* <span className="text-primary">Salary: </span> */}
                  {job.salary} $ per month
                </span>
                <p className="description col-11 text-muted ">
                  {job.description}
                </p>
                <div className="footer  col-12">
                  <span className="job-date">
                    {formatDistance(
                      subDays(new Date(job.createdAt), 0),
                      Date.now(),
                      {
                        addSuffix: true,
                      }
                    )}
                  </span>
                  <button className=" details">
                    {" "}
                    <Link className="link" to={`job/${job._id}`}>
                      Details
                    </Link>
                  </button>

                  <button className="apply">
                    <Link className="link" to={`apply/${job._id}`}>
                      Apply
                    </Link>
                  </button>
                </div>
              </div>
            )
          })}
      </div>
      <Pagination
        items={jobs}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default LatestJobs
