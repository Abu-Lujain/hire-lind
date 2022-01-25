import "./jobs.css";
import profile from "../../assets/profile.jpg";
// import { useState } from "react";
// import upload from "../../assets/upload.jpeg";

// import { ArrowBackIosIcon } from "@material-ui/icons";
import HighPaying from "./HighPaying";
const Jobs = () => {
  return (
    <div className="jobs-parent  col-md-6 col-sm-12 col-12  mt-2 ">
      <h4 className="text-center high-paying-jobs-title">Most High-Paying</h4>
      <div className="slider d-flex position-relative pt-5">
        <HighPaying profile={profile} />
      </div>
      <div className="latest-jobs">
        <h4 className="job-list-title">Latest jobs</h4>
        {/* ###################### */}
        <div className="job-container row m-3 ">
          <div className="log-container bg-dark col-md-4">
            <img src="" alt="logo" />
          </div>
          <div className="job-boy container col-md-8">
            <div className="job-title">Web Developer</div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              officiis voluptate sapiente obcaecati nam aspernatur.
            </p>
          </div>
          <div className="footer row">
            <div className="date col-5">yesterday, 8:44 pm</div>
            <div className="action col-7">
              <button className=" btn btn-info btn-sm">View Details</button>
              <button className="float-end btn btn-primary btn-sm align-self-end">
                Appy Now
              </button>
            </div>
          </div>
        </div>
        {/* ###################### */}
        <div className="job-container row m-3 ">
          <div className="log-container bg-dark col-md-4">
            <img src="" alt="logo" />
          </div>
          <div className="job-boy container col-md-8">
            <div className="job-title">Web Developer</div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              officiis voluptate sapiente obcaecati nam aspernatur.
            </p>
          </div>
          <div className="footer row">
            <div className="date col-5">yesterday, 8:44 pm</div>
            <div className="action col-7">
              <button className=" btn btn-info btn-sm">View Details</button>
              <button className="float-end btn btn-primary btn-sm align-self-end">
                Appy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
