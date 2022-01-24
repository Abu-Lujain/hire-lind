import "./developers.css";
import profile from "../../assets/profile.jpg";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Visibility } from "@material-ui/icons";
const Developer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" ">
      <h4 className=" mt-5  developer-list-title">Latest jobs</h4>
      {/* ################# */}
      {/* ################# */}
      <div className="developer  main-b-shadow mt-3 p-2">
        <div className=" row">
          <div className="header row">
            <img
              src={profile}
              alt="developer image"
              className="developer-image card-img-top col-md-4 col-4 "
            />
            <div className="developer-info col-md-8 col-8 ">
              <div className="">
                {" "}
                <h6>Abdalhafeez Ismael/ frontend web developer</h6>{" "}
                <span className="status text-center small text-muted">
                  status: Hired
                </span>
              </div>
            </div>
          </div>
          <div className="take-actions row  mt-3">
            {" "}
            <div className="like  col-md-6 col-6">
              {" "}
              <span className="likes-number btn btn-light text-dark text-muted">
                <ArrowUpwardIcon className=" text-success " />
                856
              </span>{" "}
              <span className="views-number text-dark text-muted">
                <Visibility className=" text-success " />
                8k
              </span>{" "}
            </div>{" "}
            <div className="col-md-6 col-6 d-flex justify-content-between">
              <span className=" hire-me bg-primary ">Hire Me</span>
              <span className="view bg-info   ">View </span>
            </div>
          </div>
        </div>
      </div>
      {/* ################# */}
    </div>
  );
};

export default Developer;
