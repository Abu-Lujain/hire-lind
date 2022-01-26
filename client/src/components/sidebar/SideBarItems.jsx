import { Link } from "react-router-dom";
const SideBarItems = () => {
  return (
    <div className="sidebar-items">
      <div className="   list-group   py-1 mt-1 mt-3">
        <h6 className="text-center text-second-danger">Filter the jobs</h6>
        <li className="     ">
          {" "}
          <a href="3" className=" -action btn -action active"></a>
        </li>
        <li className="    ">
          <a href="3" className=" -action btn">
            entry level
          </a>{" "}
        </li>

        <Link to="register">sign up</Link>
      </div>
      <Link to="me">
        <h5 className=" view-profile list-group   p-3  rounded mt-4 text-center">
          view profile
        </h5>
      </Link>
    </div>
  );
};

export default SideBarItems;
