import "./styles/hightPayingJobs.css";
import { useState, useRef, useEffect } from "react";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import { profiles } from "../../api_Calls/profiles";
import { axiosInstance } from "../../config/axiosInstance"
const TopProfiles = ({ profile }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideWithHand, setSlideWithHand] = useState(false)
  const [sliderWidth, setSliderWidth] = useState(0)
  const [highPayingJobs, setHighPayingJobs] = useState(0)
  let widthRef = useRef()
  // console.log("sliderWidth: ", sliderWidth);
  const isMounted = useRef(true)
  useEffect(() => {
    isMounted.current = true
    if (isMounted.current) {
      setSliderWidth(widthRef?.current?.offsetWidth)
    }
    return () => {
      isMounted.current = false
      setSliderWidth(false)
    }
  }, [isMounted, sliderWidth])

  const handleSlide = (direction) => {
    // console.log(currentSlide > 0 && currentSlide < profiles.length - 1);
    if (direction === "right") {
      if (currentSlide === 0) {
        setCurrentSlide(currentSlide + 1)
      }
      if (currentSlide < profiles.length - 1) {
        setCurrentSlide(currentSlide + 1)
      }
      if (currentSlide === profiles.length - 1) {
        // console.log("equal");
        setCurrentSlide(0)
      }
    } else {
      if (currentSlide > 0 && currentSlide < profiles.length - 1) {
        setCurrentSlide(currentSlide - 1)
      }
      if (currentSlide === profiles.length - 1) {
        setCurrentSlide(0)
      }
      // if (currentSlide === 0) {
      //   setCurrentSlide(profiles.length - 1);
      // }
    }
  }
  setTimeout(() => {
    setSlideWithHand(false)
  }, 10000)
  if (!slideWithHand) {
    const slide = setInterval((d) => {
      if (currentSlide === 0) {
        setCurrentSlide(currentSlide + 1)
      }
      if (currentSlide < profiles.length - 1) {
        setCurrentSlide(currentSlide + 1)
      }
      if (currentSlide === profiles.length - 1) {
        setCurrentSlide(0)
      }
      clearInterval(slide)
    }, 3000)
  }
  useEffect(() => {
    async function fetchHighPayJobs() {
      try {
        const res = await axiosInstance.get("/jobs/hightPaying")
        console.log(res.data)
        setHighPayingJobs(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchHighPayJobs()
  }, [])
  // console.log(highPayingJobs?.slice(0, 5))
  return (
    <>
      <span
        onClick={() => {
          handleSlide("right")
          setSlideWithHand(true)
        }}
        className=" position-absolute right-arrow shadow-sm"
      >
        <ArrowForwardIosOutlined style={{ fontSize: "35px", padding: "2px" }} />
      </span>
      <span
        onClick={() => {
          handleSlide("left")
          setSlideWithHand(true)
        }}
        className=" position-absolute left-arrow "
      >
        <ArrowBackIosOutlined style={{ fontSize: "35px", padding: "2px" }} />
      </span>
      {highPayingJobs &&
        highPayingJobs?.slice(0, 5)?.map((job) => {
          return (
            // slide
            <div
              ref={widthRef}
              className="col slide col-md-12  col-12 p-2  "
              style={{
                transform: `translateX(-${currentSlide * sliderWidth}px)`,
              }}
              key={job._id}
            >
              <div className="row col-12">
                <div className="hight-pay-job-img-container col-4">
                  <img
                    src={profile}
                    alt="profile-img "
                    className="hight-pay-job-img col-md-4   col-12"
                  />
                  <div className="company-name">{job?.companyName}</div>
                </div>
                <div className="high-pay-job-body col-8">
                  <h2 className="high-pay-job-title">{job?.title}</h2>
                  <h3>{job?.shift}</h3>
                  <h5>
                    <span className="text-success">{`${job?.salary}$`}</span>
                  </h5>
                  <p className="High-paying-job-description">
                    {job?.description?.split(" ").slice(0, 200).join(" ")}
                  </p>
                </div>
              </div>
              <button className="btn btn-outline-dark float-end">
                View Details
              </button>
              {/* <div className="card-body ">{}</div> */}
            </div>
          )
        })}
    </>
  )
}

export default TopProfiles;
