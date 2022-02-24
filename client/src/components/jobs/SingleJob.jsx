import "./styles/singleJob.css"
import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useContext } from "react"
import { jobContext } from "../../context/job_context/jobContext"
import { getSingleJob } from "../../api_Calls/jobCalls"
import axios from "axios"
function SingleJob() {
  const isMounted = useRef(false)
  // const { job, dispatch } = useContext(jobContext)
  const { pathname } = useLocation()
  const [singleJob, setSingleJob] = useState([])

  useEffect(() => {
    isMounted.current = true
    async function fetchData() {
      try {
        const res = await axios.get(`/jobs${pathname}`)
        if (isMounted.current) {
          res.data && setSingleJob(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    return () => {
      isMounted.current = false
    }
  }, [])
  console.log(singleJob)

  return (
    <div className=" row single-job">
      {singleJob && (
        <>
          <div className="header col-12 row">
            <div className="details col-4 m-auto">
              <h3>Job Details</h3> <h6>{singleJob?.industry}</h6>
              <button className="m-2 btn btn-primary apply-btn">Appy</button>
            </div>
            <div className="title col-6">
              <h5>
                <span className="text-primay">
                  {/* <span className="work-place">Remote</span> -{singleJob?.shift}{" "} */}
                </span>{" "}
                {singleJob?.title} - {singleJob?.shift} -
                <span className="work-place">work from office</span>
              </h5>
              <small className="text-muted">
                post yesterday, by:
                <span>
                  <Link to={`/company/${singleJob?.company}`}>
                    {" "}
                    {singleJob?.companyName}
                  </Link>
                </span>{" "}
              </small>
            </div>{" "}
          </div>
          <div className="details col-12 m-auto row">
            <div className="col-md-3 col-5 experience-needed">
              <h6 className="text-primary">Experience</h6>
              Lorem ipsum dolor sit ame
            </div>
            <div className="col-md-3 col-5 education">
              <h6 className="text-primary">Education</h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            </div>{" "}
            <div className="working-days col-md-2 col-4">
              <h6 className=" text-primary">Working Days</h6>
              <li>Sunday</li>
              <li>Monday</li>
              <li>Tuseday</li>
              <li> Thursday</li>
            </div>
            <div className="col-7 col-md-3 perks">
              <h6 className="text-primary ">entitlements and perks</h6>
              {singleJob && singleJob?.perks?.map((p) => <li> {p}</li>)}
            </div>
          </div>
          <div className="more-details col-11 row">
            <div className="left col-md-6 col-12 ">
              <div className="description">
                <h4>description</h4>
                <p>{singleJob?.description}</p>
              </div>
            </div>{" "}
            <div className="right col-md-5 col-12 ms-auto">
              <h4>Recruitment process</h4>
              <p>{singleJob?.recruitmentProcess}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default SingleJob
