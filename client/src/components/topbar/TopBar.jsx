import Join from "../join/Join";
import "./topbar.css";
import { Link, useLocation } from "react-router-dom";
import Menu from "../menu/Menu";
import { profileContext } from "../../context/profile_context/profileContext";
import { useContext } from "react";
import { authContext } from "../../context/auth_context/authContext";
import { companyContext } from "../../context/company_context/companyContext"
function Topbar({ openNav, setOpenNav }) {
  const PF = "http://localhost:8000"
  const { profile } = useContext(profileContext)
  const { company } = useContext(companyContext)
  const { user } = useContext(authContext)
  const { pathname } = useLocation()
  const candidate = user?.profileType === "employee"
  return (
    <div className="row m-0 topbar col-12">
      <div className="col col-2  d-flex top-right">
        {/* <img src={logo} alt="logo" className="logo-img rounded-circle " /> */}
        <Link to="/" className=" link">
          <h2 className="logo mx-1 link">4Carrier</h2>
        </Link>
      </div>
      <div className="middle-links col-7 col-md-9 ">
        {pathname.includes("profile") || pathname.includes("company") ? (
          ""
        ) : (
          <>
            {" "}
            {user && (
              <>
                {user?.isAdmin ? (
                  <Link to="/" className=" link">
                    <h6 className="logo mx-1 link">Admins Dashboard</h6>
                  </Link>
                ) : (
                  <span>{user?.userName}</span>
                )}
                <Link
                  to={`/${
                    candidate
                      ? "profile/" + profile?._id
                      : "company/" + company?._id
                  }`}
                  className="px-3 link"
                >
                  <img
                    src={`${PF}${user?.photo}`}
                    className="profile-icon"
                    alt="profile"
                  />
                </Link>
              </>
            )}
          </>
        )}
        <Join openNav={openNav} />
      </div>
      <Menu openNav={openNav} />
      <div className="col-2 d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block ">
        <div className=" nav-btn  position-relative d-flex justify-content-end">
          <div
            onClick={() => setOpenNav(!openNav)}
            className={
              openNav ? "move-nav-icon position-relative opener" : "opener"
            }
          >
            <span
              className={!openNav ? "line-one" : "line-one-open col-md-12"}
            ></span>
            <span
              className={!openNav ? "line-two" : "line-two-open col-md-12"}
            ></span>
            <span
              className={!openNav ? "line-three" : "line-three-open col-md-12"}
            ></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar;
