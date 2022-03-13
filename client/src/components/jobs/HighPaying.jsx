import "./styles/hightPayingJobs.css";
import { useState, useRef, useEffect } from "react";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import { profiles } from "../../api_Calls/profiles";
import { axiosInstance } from "../../config/axiosInstance"
import { Spinner } from "react-bootstrap"

const TopProfiles = ({ profile }) => {
  const [loadingJobs, setLoadingJobs] = useState(false)
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
      if (currentSlide > 0 && currentSlide <= profiles.length - 1) {
        setCurrentSlide(currentSlide - 1)
      }
      if (currentSlide === 0) {
        setCurrentSlide(profiles.length - 1)
      }
    }
    setSlideWithHand(true)
    // setTimeout(() => {
    //   setSlideWithHand(false)
    // }, 10000)
  }

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
      setLoadingJobs(true)
      try {
        const res = await axiosInstance.get("/jobs/hightPaying")
        setHighPayingJobs(res.data)
        setLoadingJobs(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchHighPayJobs()
  }, [])
  // console.log(highPayingJobs?.slice(0, 5))
  return (
    <>
      <>
        {loadingJobs && (
          <Spinner
            className=" slider-spinner col-12"
            animation="grow"
            role="status"
          ></Spinner>
        )}
      </>
      <span
        onClick={() => {
          handleSlide("right")
        }}
        className=" position-absolute right-arrow shadow-sm"
      >
        <ArrowForwardIosOutlined style={{ fontSize: "35px", padding: "2px" }} />
      </span>
      <span
        onClick={() => {
          handleSlide("left")
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
              className="col slide col-12 p-2  "
              style={{
                transform: `translateX(-${currentSlide * sliderWidth}px)`,
              }}
              key={job._id}
            >
              <div className="row col-12">
                <div className="hight-pay-job-img-container col-2">
                  <img
                    src={profile}
                    alt="profile-img "
                    className="hight-pay-job-img"
                  />
                </div>
                <h5 className="high-pay-job-title col-9">
                  {" "}
                  <span className="text-primary">{job?.shift} - </span>
                  {job?.title}
                </h5>
                <div className="high-pay-job-body col-8">
                  <div className="company-name col-9">{job?.companyName}</div>
                </div>
                <h5>
                  <span className="text-success">{`${job?.salary}$`}</span>
                </h5>
                <p className="High-paying-job-description">
                  {job?.description?.split(" ").slice(0, 30).join(" ")}{" "}
                  <span className="text-primary">...</span>
                </p>
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
