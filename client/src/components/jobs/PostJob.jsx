import React, { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useContext } from "react"
import { jobContext } from "../../context/job_context/jobContext"
import { companyContext } from "../../context/company_context/companyContext"
import "./styles/postJob.css"
import { AddJobHandler } from "../../api_Calls/jobCalls"
import { loadCompany } from "../../api_Calls/companyCall"
import { authContext } from "../../context/auth_context/authContext"
function PostJob() {
  const [errors, setErrors] = useState([])
  const [perks, setPerks] = useState([])
  const [addJob, setAddJob] = useState(false)
  const [experienceRequired, setExperienceRequired] = useState("")
  const [recruitmentProcess, setRecruitmentProcess] = useState("")
  const [description, setDescription] = useState("")
  const [title, setTitle] = useState("")
  const [salary, setSalary] = useState(0)
  const [shift, setShift] = useState("")
  const [industry, setIndustry] = useState("")
  const { fetching, jobError, dispatch } = useContext(jobContext)
  const { user } = useContext(authContext)
  const { company, dispatch: loadCoDispatch } = useContext(companyContext)
  useEffect(() => {
    loadCompany(loadCoDispatch)
  }, [loadCoDispatch])
  console.log(company)
  const addJobHandler = (e) => {
    setPerks("")
    setAddJob("")
    setExperienceRequired("")
    setRecruitmentProcess("")
    setDescription("")
    setTitle("")
    setSalary("")
    setShift("")
    setIndustry("")
    e.preventDefault()
    const body = {
      companyName: user.userName,
      perks,
      recruitmentProcess,
      description,
      experienceRequired,
      title,
      salary,
      shift,
      industry,
    }

    AddJobHandler(body, dispatch)
    console.log(body)
    // clear errors
    setErrors(jobError)

    setTimeout(() => {
      setErrors([])
    }, 5000)
  }

  return (
    <div className="col-12 add-new-job row">
      {fetching && !jobError ? (
        <div className="spinner-parent">
          <Spinner
            className="load-profile-spinner m-3"
            variant="primary"
            animation="border"
            role="status"
          ></Spinner>
          {/* create JS animatino */}
          <h4>please Wait...</h4>
        </div>
      ) : (
        <form className="add-job-form col-md-7 col-11" onSubmit={addJobHandler}>
          <div className="col-12">
            <label>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
            />
          </div>
          <div className="col-12">
            <label>Experience </label>
            <input
              onChange={(e) => setExperienceRequired(e.target.value)}
              type="text"
              name="experienceRequired"
              placeholder="what is the Experience needed ?"
            />
          </div>
          <div className="col-12">
            <label>
              entitlements <br />
            </label>
            <input
              onChange={(e) => setPerks(e.target.value)}
              type="text"
              name="perksArray"
              placeholder="e.g Car, Housing, Health Care"
            />{" "}
          </div>
          <div className="col-12 salary-parent">
            <label>Salary per month</label>
            <input
              onChange={(e) => setSalary(e.target.value)}
              type="number"
              name="salary"
            />
          </div>
          <div className="col-12 select-parent">
            <label>Industry</label>
            <select
              name="industry"
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="">choose</option>{" "}
              <option value="education">Education</option>{" "}
              <option value="Programming">programming</option>
              <option value="business">business</option>
            </select>
          </div>
          <div className="col-12 select-parent">
            <label>Shift</label>
            <select name="shift" onChange={(e) => setShift(e.target.value)}>
              <option value="">choose</option>{" "}
              <option value="full-time">full-time</option>{" "}
              <option value="part-time">part-time</option>
            </select>
          </div>

          <div className="col-12 textarea-parent ">
            <label className="col-12 ">Recruitment process</label>
            <textarea
              onChange={(e) => setRecruitmentProcess(e.target.value)}
              type="text"
              name="recruitmentProcess"
            />
          </div>
          <div className="col-12 textarea-parent ">
            <label className="col-12 ">Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              name="description"
            />
          </div>
          <div className="errors">
            {errors &&
              errors?.map((arr) => (
                <h5 className="text-center text-danger p-2" key={arr.msg}>
                  {arr.msg}
                </h5>
              ))}
          </div>
          <div className="col-12 action">
            <button
              onClick={() => setAddJob(!addJob)}
              className="btn btn-sm btn-danger"
            >
              concel
            </button>
            <button className="btn btn-sm btn-success">Create Job</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default PostJob
