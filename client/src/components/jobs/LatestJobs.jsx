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
import { axiosInstance, PF } from "../../config/axiosInstance"
import Loaders from "../common/Loaders"
function LatestJobs({ openDropDown, setOpenDropDown }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)
  const { user } = useContext(authContext)
  const { company } = useContext(companyContext)
  const [delMsg, setDelMsg] = useState("")
  const [loadingJobs, setLoadingJobs] = useState(false)
  const [deletedJob, setDeletedJob] = useState("")
  const [jobs, setJobs] = useState([])
  const [showNote, setShowNote] = useState(null)
  const [currentJobs, setCurrentJobs] = useState([])
  useEffect(() => {
    async function fetchjobs() {
      setLoadingJobs(true)
      try {
        const res = await axiosInstance.get("/jobs")
        setJobs(res.data)
        setLoadingJobs(false)
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
  // filter job

  const filterJobHandler = (event) => {
    setCurrentJobs(
      jobs?.filter(
        (job) =>
          job.industry.toLowerCase() ===
          event.currentTarget.getAttribute("data-id").toLowerCase()
      )
    )
    currentJobs.forEach((j) => {
      console.log(j.industry)
    })
    event.currentTarget.classList.remove("active")
    event.currentTarget.classList.add("active")
    console.log(event.currentTarget.classList)
  }
  // setting for pagination
  const indexOfLastJob = currentPage * itemsPerPage
  const indexOfFirstJob = indexOfLastJob - itemsPerPage
  useEffect(() => {
    setCurrentJobs(jobs.slice(indexOfFirstJob, indexOfLastJob))
  }, [jobs])
  return (
    <div className="mt-2 row m-auto ">
      <h4 className="job-list-title col-12">Latest jobs</h4>
      <nav className="col-12 categories">
        <ul>
          <li onClick={filterJobHandler} data-id="All" className="active">
            {" "}
            All
          </li>
          <li onClick={filterJobHandler} data-id="Education" className="">
            {" "}
            Education
          </li>
          <li onClick={filterJobHandler} data-id="Programming" className="">
            {" "}
            Programming
          </li>
          <li onClick={filterJobHandler} data-id="Business" className="">
            {" "}
            Business
          </li>
        </ul>
      </nav>
      <div className="latest-jobs  col-12 ">
        {delMsg && <div className="msg">{delMsg}</div>}
        <>{loadingJobs && <Loaders />}</>
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
                  user={user}
                  company={company}
                  openDropDown={openDropDown}
                  setOpenDropDown={setOpenDropDown}
                  deleteJobHandler={deleteJobHandler}
                />
                {/* <span className="job-marker">Vacant</span> */}
                <div className="logo-container col-2">
                  <img
                    src={PF + job?.companyLogo}
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
                  {job.salary}$ per month
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
