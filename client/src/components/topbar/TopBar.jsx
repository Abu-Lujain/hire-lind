import Join from "../join/Join";
import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
function Topbar({ openNav, setOpenNav }) {
  return (
    <div className="row m-0 topbar">
      <div className="col col-md-3 col-10   d-flex top-right">
        {/* <img src={logo} alt="logo" className="logo-img rounded-circle " /> */}
        <Link to="/" className=" link">
          <h2 className="logo mx-1 link">4Carrier</h2>
        </Link>
        <Join openNav={openNav} />
      </div>
      <div className="col col-md-7 d-none d-md-flex d-flex align-items-center ">
        <li className="list-unstyled col-3  mx-1">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="list-unstyled col-3  mx-1">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li className="list-unstyled col-3  mx-1">
          <Link className="link" to="/contacts">
            Contacts
          </Link>
        </li>
        <li className="list-unstyled col-3  mx-1"></li>
        <li className="list-unstyled col-3  mx-1">
          <Link className="link" to="/setting">
            Setting
          </Link>
        </li>
      </div>
      {/* profile icon */}
      <div className="view-profile-icon col col-md-2 d-none d-sm-block">
        <Link to="/me" className=" link">
          {/* <img src="" alt="profile" /> */}
        </Link>
      </div>
      <Menu openNav={openNav} />
      <div className="col d-flex  col-sm-2 col-2  ">
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
  );
}

export default Topbar;
