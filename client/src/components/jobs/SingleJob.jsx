import "./styles/singleJob.css";
import React from "react";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { jobContext } from "../../context/job_context/jobContext";
import { getSingleJob } from "../../api_Calls/jobCalls";
function SingleJob() {
  const isMounted = useRef(true);
  const { job, dispatch } = useContext(jobContext);
  const { pathname } = useLocation();

  useEffect(() => {
    async function fetchdata() {
      getSingleJob(pathname, dispatch);
    }
    if (isMounted.current) {
      fetchdata();
    }
    return () => {
      isMounted.current = false;
    };
  }, [dispatch, pathname]);
  console.log(job);
  return (
    <div className=" row single-job">
      <div className="header col-11 row">
        <div className="details col-4">
          <h3>Job Details</h3> <h6>Programming</h6>
        </div>
        <div className="title col-6">
          <h5>
            <span className="text-primay">Full-time </span> Backend Web
            Developer
          </h5>
          <small>
            post yesterday, by:{" "}
            <span>
              <Link to="#"> Code Log For Technical Solution</Link>
            </span>{" "}
          </small>
        </div>{" "}
      </div>
      <div className="body col-11 row">
        <div className="left col-md-6 col-12 m-1">
          <ul className="col-12">
            <li> somethings</li>
            <li> somethings</li>
            <li> somethings</li>
          </ul>
          <div className="description">
            <h4>description</h4>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ipsam dolorum eum repellat voluptates odio! Delectus alias
              voluptatum dolorem enim reprehenderit ipsam quod consequatur eos
              officia perferendis minima amet nesciunt, aliquid, nobis maxime
              ipsum quos repudiandae, reiciendis voluptates mollitia. Corporis,
              molestiae incidunt dolor amet voluptate vero excepturi soluta in
              ullam.
            </p>
          </div>
        </div>{" "}
        <div className="right col-md-5 col-5">
          <h4>Recruitment process</h4>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            ipsam dolorum eum repellat voluptates odio! Delectus alias
            voluptatum dolorem enim reprehenderit ipsam quod consequatur eos
            officia perferendis minima amet nesciunt, aliquid, nobis maxime
            ipsum quos repudiandae, reiciendis voluptates mollitia. Corporis,
            molestiae incidunt dolor amet voluptate vero excepturi soluta in
            ullam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleJob;
