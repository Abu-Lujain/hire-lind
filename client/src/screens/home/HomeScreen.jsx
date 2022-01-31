import Candidates from "../../components/candidates/Candidates";
import LatestJobs from "../../components/jobs/LatestJobs";
import HighPaying from "../../components/jobs/HighPaying";
import profile from "../../assets/profile.jpeg";
import CandidatesPosts from "../../components/candidates/CandidatesPosts";

const HomeScreen = () => {
  return (
    <div className=" home row ">
      {/* <SideBar /> */}
      {/* <div className="sidebar  col-md-2 d-sm-none d-none d-md-block  "></div> */}
      <div className="jobs-parent  col-md-7 col-12 m-auto   mt-2 ">
        <h4 className="text-center high-paying-jobs-title">Most High-Paying</h4>
        <div className="slider ">
          <HighPaying profile={profile} />
        </div>
      </div>
      <div className="right  col-4 ms-auto d-none d-md-block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure facere
        illum laudantium adipisci tenetur rem ipsa maxime ea dolorum molestias,
        fuga rerum eum sapiente debitis est suscipit itaque ad aut?
      </div>
      <LatestJobs />
      <Candidates />
      <CandidatesPosts />
    </div>
  );
};

export default HomeScreen;
