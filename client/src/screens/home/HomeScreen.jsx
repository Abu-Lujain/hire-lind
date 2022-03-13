import "./home.css"
import Candidates from "../../components/candidates/Candidates"
import LatestJobs from "../../components/jobs/LatestJobs"
import HighPaying from "../../components/jobs/HighPaying"
import profile from "../../assets/profile.jpeg"
import Search from "../../components/search/Search"
import ShowAll from "../../components/posts/ShowAll"
const HomeScreen = ({ user }) => {
  return (
    <div className=" home row ">
      {/* <SideBar /> */}
      {/* <div className="sidebar  col-md-2 d-sm-none d-none d-md-block  "></div> */}
      <div className="high-paying-jobs-parent col-md-7 col-12 m-auto   mt-2 ">
        <h4 className="text-center high-paying-jobs-title">High Paying Jobs</h4>
        <div className="slider ">
          <HighPaying profile={profile} />
        </div>
      </div>
      <Search />
      <LatestJobs />
      {/* <Candidates /> */}
      <ShowAll user={user} />
    </div>
  )
}

export default HomeScreen
