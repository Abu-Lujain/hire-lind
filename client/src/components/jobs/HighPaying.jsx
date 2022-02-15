import "./styles/hightPayingJobs.css";
import { useState, useRef, useEffect } from "react";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import { profiles } from "../../api_Calls/profiles";
const TopProfiles = ({ profile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWithHand, setSlideWithHand] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);
  let widthRef = useRef();
  // console.log("sliderWidth: ", sliderWidth);
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      setSliderWidth(widthRef.current.offsetWidth);
    }
    return () => {
      isMounted.current = false;
      setSliderWidth(false);
    };
  }, [isMounted, sliderWidth]);

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
            className="col slide col-md-12  col-12 p-2  "
            style={{
              transform: `translateX(-${currentSlide * sliderWidth}px)`,
            }}
            key={prof.id}
          >
            <div className="row col-12">
              <div className="hight-pay-job-img-container col-4">
                <img
                  src={profile}
                  alt="profile-img "
                  className="hight-pay-job-img col-md-4   col-12"
                />
                <div className="company-name">
                  code log for technical solutions
                </div>
              </div>
              <div className="high-pay-job-body col-8">
                <h2 className="high-pay-job-title">{prof.job}</h2>
                <h3>Full Time</h3>
                <h5>
                  <span className="text-success">100K$</span> Negotiable{" "}
                </h5>
                <p className="High-paying-job-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  reprehenderit, error sequi laboriosam a, libero facere dicta
                  totam, tempore accusamus cum earum. Totam, voluptatem minus
                  officiis consequatur cumque repellendus sit.
                </p>
              </div>
            </div>
            <button className="btn btn-outline-dark float-end">
              View Details
            </button>
            {/* <div className="card-body ">{}</div> */}
          </div>
        );
      })}
    </>
  );
};

export default TopProfiles;
