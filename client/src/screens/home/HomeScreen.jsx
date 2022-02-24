import "./home.css"
import Candidates from "../../components/candidates/Candidates"
import LatestJobs from "../../components/jobs/LatestJobs"
import HighPaying from "../../components/jobs/HighPaying"
import profile from "../../assets/profile.jpeg"
import { useContext } from "react"

import Search from "../../components/search/Search"
import { companyContext } from "../../context/company_context/companyContext"
import { useEffect } from "react"
import { loadCompany } from "../../api_Calls/companyCall"
import ShowAll from "../../components/posts/ShowAll"
const HomeScreen = () => {
  const { dispatch: loadCompanyDispatch } = useContext(companyContext)
  useEffect(() => {
    loadCompany(loadCompanyDispatch)
  }, [loadCompanyDispatch])

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
      <Search />
      <LatestJobs />
      {/* <Candidates /> */}
      <ShowAll />
    </div>
  )
}

export default HomeScreen
