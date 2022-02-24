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
    <div className="row m-0 topbar">
      <div className="col col-md-6 col-9   d-flex top-right">
        {/* <img src={logo} alt="logo" className="logo-img rounded-circle " /> */}
        <Link to="/" className=" link">
          <h2 className="logo mx-1 link">4Carrier</h2>
        </Link>
        {user?.isAdmin && (
          <Link to="/" className=" link">
            <h6 className="logo mx-1 link">Admins Dashboard</h6>
          </Link>
        )}
        {pathname.includes("profile") || pathname.includes("company") ? (
          ""
        ) : (
          <>
            {" "}
            {user && (
              <Link
                to={`/${
                  candidate
                    ? "profile/" + profile?._id
                    : "company/" + company?._id
                }`}
                className=" link"
              >
                <img
                  src={`${PF}${profile?.photo}`}
                  className="profile-icon"
                  alt="profile"
                />
              </Link>
            )}
          </>
        )}
        <div className=" join d-md-none d-lg-block d-lg-none .d-xl-block d-md-none .d-lg-block">
          <Join openNav={openNav} />
        </div>
      </div>
      <div className="middle-links col col-md-5 d-none d-md-flex ">
        <li className=" ">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className=" ">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li className=" ">
          <Link className="link" to="/contacts">
            Contacts
          </Link>
        </li>{" "}
        <div className="join-links col-md-5 join">
          {" "}
          <Join openNav={openNav} />
        </div>{" "}
      </div>
      {/* profile icon */}

      <Menu openNav={openNav} />
      <div className="col d-flex  col-sm-2 col-3  ">
        <div className=" nav-btn col col-md-12 d-md-none  position-relative d-flex justify-content-end mt-1">
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
