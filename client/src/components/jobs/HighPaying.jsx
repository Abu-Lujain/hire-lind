import { useState, useRef, useEffect } from "react";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import { profiles } from "../../api_Calls/profiles";
const TopProfiles = ({ profile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWithHand, setSlideWithHand] = useState(false);
  const [elWidth, setElWidth] = useState(0);
  let widthRef = useRef();
  // console.log("elWidth: ", elWidth);

  useEffect(() => {
    setElWidth(widthRef.current.offsetWidth);
  }, [elWidth]);

  const handleSlide = (direction) => {
    // console.log(currentSlide > 0 && currentSlide < profiles.length - 1);
    if (direction === "right") {
      if (currentSlide === 0) {
        setCurrentSlide(currentSlide + 1);
      }
      if (currentSlide < profiles.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
      if (currentSlide === profiles.length - 1) {
        // console.log("equal");
        setCurrentSlide(0);
      }
    } else {
      if (currentSlide > 0 && currentSlide < profiles.length - 1) {
        setCurrentSlide(currentSlide - 1);
      }
      if (currentSlide === profiles.length - 1) {
        setCurrentSlide(0);
      }
      // if (currentSlide === 0) {
      //   setCurrentSlide(profiles.length - 1);
      // }
    }
  };
  setTimeout(() => {
    setSlideWithHand(false);
  }, 10000);
  if (!slideWithHand) {
    const slide = setInterval((d) => {
      if (currentSlide === 0) {
        setCurrentSlide(currentSlide + 1);
      }
      if (currentSlide < profiles.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
      if (currentSlide === profiles.length - 1) {
        setCurrentSlide(0);
      }
      clearInterval(slide);
    }, 3000);
  }

  return (
    <>
      <span
        onClick={() => {
          handleSlide("right");
          setSlideWithHand(true);
        }}
        className=" position-absolute right-arrow shadow-sm"
      >
        <ArrowForwardIosOutlined style={{ fontSize: "35px", padding: "2px" }} />
      </span>
      <span
        onClick={() => {
          handleSlide("left");
          setSlideWithHand(true);
        }}
        className=" position-absolute left-arrow "
      >
        <ArrowBackIosOutlined style={{ fontSize: "35px", padding: "2px" }} />
      </span>
      {profiles.map((prof) => {
        return (
          // slide
          <div
            ref={widthRef}
            className="col slide col-md-12 col-sm-12 col-12 p-2  "
            style={{
              transform: `translateX(-${currentSlide * elWidth}px)`,
            }}
            key={prof.id}
          >
            <div className="row    col-sm-12 col-12">
              <img
                src={profile}
                alt="profile-img "
                className="top-profile-img col-md-4 col-sm-12  col-12"
              />
              <div className=" col-md-7 col-sm-12  card-title col-12 mt-2 ">
                <h3 className="employee-name  ">{prof.name}</h3>
                <div className="job-title-parent">
                  <span className="job-title text-dark">
                    {" "}
                    the target job :{" "}
                  </span>{" "}
                  <span className="text-primary">{prof.job}</span>
                </div>
                <div className="job-title-parent">
                  <span className="job-title text-dark"> skills: </span>
                  {prof.skills.map((skill) => {
                    return (
                      <span className="text-primary" key={skill}>
                        {" "}
                        {skill}{" "}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark float-end">
              view profile
            </button>
            {/* <div className="card-body ">{}</div> */}
          </div>
        );
      })}
    </>
  );
};

export default TopProfiles;
