import { useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import Jobs from "../components/jobs/Jobs";
import Developer from "../components/developers/Developer";
const HomeScreen = () => {
  const user = false;
  return (
    <div className=" home row">
      <SideBar />
      <div className="sidebar  col-md-2 d-sm-none d-none d-md-block  "></div>
      <div
        className="welcome-container 
                      d-md-none d-lg-block 
                      d-lg-none .d-xl-block
                      d-md-none .d-lg-block
                      col-12 main-b-shadow "
      >
        <div className="welcome-text-parent col-12 d-flex justify-content-center mb-5 p-2 main-b-shadow">
          {" "}
          {user ? (
            <h5 className="welcome-text">Welcome to Hire Land, mr. Khalid</h5>
          ) : (
            <div className="row">
              {" "}
              <span>you are not registered</span>
              <button className="signup btn btn-outline-primary    col-5">
                signup
              </button>{" "}
              <button className="login btn btn-outline-primary  col-5">
                login
              </button>
            </div>
          )}
        </div>{" "}
        <div className="takeActions col-12 d-flex justify-content-between mt-1">
          <button className="btn btn-outline-primary px-5  jobs-btn">
            Jobs
          </button>
          <button className="btn btn-outline-primary  px-4 candidates-btn">
            candidates
          </button>
        </div>
      </div>

      <Jobs />
      <Developer />
    </div>
  );
};

export default HomeScreen;
