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
          <div className="header col-11 row">
            <div className="details col-4">
              <h3>Job Details</h3> <h6>{singleJob?.industry}</h6>
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
                post yesterday, by:{" "}
                <span>
                  <Link to={`/company/${singleJob?.company}`}>
                    {" "}
                    {singleJob?.companyName}
                  </Link>
                </span>{" "}
              </small>
            </div>{" "}
          </div>
          <div className="details col-11 row">
            <div className="col-3 experience-needed">
              <h6 className="text-primary text-center">Experience</h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              cumque sit eius laudantium earum. Reprehenderit hic laborum fugiat
              temporibus a! Eius natus tempora sunt voluptate a iure hic tenetur
              vel.
            </div>
            <div className="col-3 education">
              <h6 className="text-primary text-center">Education</h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              corrupti eos dolor culpa cupiditate, consequuntur temporibus. Quo
              commodi facere ipsa ducimus iste. Ad unde tempore, vero quisquam
              voluptas vitae asperiores.
            </div>{" "}
            <div className="working-days col-2">
              <h6 className=" text-primary">Working Days</h6>
              <li>Sunday</li>
              <li>Sunday</li>
              <li>Sunday</li>
              <li>Sunday</li>
              <li>Sunday</li>
            </div>
            <div className="col-3 perks">
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
            <div className="right col-md-5 col-12">
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
