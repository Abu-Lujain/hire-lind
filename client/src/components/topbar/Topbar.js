// import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import "./topbar.css";
const Topbar = ({ openNav, setOpenNav }) => {
  return (
    <div className="row m-0 topbar">
      <div className="col col-md-3 col-sm-10 col-8  d-flex ">
        {/* <img src={logo} alt="logo" className="logo-img rounded-circle " /> */}
        <Link to="/" className=" link">
          <h2 className="logo text-second-danger mx-1 link">hire Land</h2>
        </Link>
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
          <Link className="link" to="/register">
            {" "}
            register
          </Link>
        </li>
        <li className="list-unstyled col-3  mx-1">
          <Link className="link" to="/setting">
            {" "}
            Setting
          </Link>
        </li>
      </div>
      {/* profile icon */}
      <div className="view-profile-icon col col-md-2 d-none d-sm-block">
        <Link to="/me" className=" link">
          <img src={logo} alt="profile" />
        </Link>
      </div>
      <Menu openNav={openNav} />
      <div className="col d-flex col-md-2 col-sm-2 col-4  ">
        {/* <div className="col col-md-10  d-xm-0 d-flex justify-content-start "></div> */}
        <div className=" nav-btn col col-md-12 d-md-none  position-relative d-flex justify-content-end mt-1">
          <div
            onClick={() => setOpenNav(!openNav)}
            className={openNav ? "move-nav-icon position-relative" : ""}
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
};

export default Topbar;
