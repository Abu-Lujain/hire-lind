import "./styles/hightPayingJobs.css";
import { useState, useRef, useEffect } from "react";
import ArrowForwardIosOutlined from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlined from "@material-ui/icons/ArrowBackIosOutlined";
import {
  PlayArrowRounded,
  PauseCircleFilled,
  TramRounded,
} from "@material-ui/icons"
import { profiles } from "../../api_Calls/profiles"
import { axiosInstance } from "../../config/axiosInstance"
import { Spinner } from "react-bootstrap"

const TopProfiles = ({ profile }) => {
  const [loadingJobs, setLoadingJobs] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliding, setSliding] = useState(true)
  const [sliderWidth, setSliderWidth] = useState(0)

  const [highPayingJobs, setHighPayingJobs] = useState(0)
  let widthRef = useRef()
  useEffect(() => {
    setSliderWidth(widthRef?.current?.offsetWidth)
    console.log(currentSlide * sliderWidth)
    if (sliding) {
      console.log(sliding)
      const slide = setInterval(() => {
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
      }, 5000)
    }
  }, [currentSlide])
  const handleSlide = (direction) => {
    // setSliding(false)
    // console.log(sliding)
    // if (direction === "right") {
    //   if (currentSlide === 0) {
    //     setCurrentSlide(currentSlide + 1)
    //   }
    //   if (currentSlide < profiles.length - 1) {
    //     setCurrentSlide(currentSlide + 1)
    //   }
    //   if (currentSlide === profiles.length - 1) {
    //     // console.log("equal");
    //     setCurrentSlide(0)
    //   }
    // } else {
    //   if (currentSlide > 0 && currentSlide <= profiles.length - 1) {
    //     setCurrentSlide(currentSlide - 1)
    //   }
    //   if (currentSlide === 0) {
    //     setCurrentSlide(profiles.length - 1)
    //   }
    // }
    // setTimeout(() => {
    //   setSliding(false)
    // }, 5000)
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

  return (
    <div className="high-paying-jobs-parent col-md-7 col-12 m-auto   mt-2 ">
      <div className="arrows ">
        <ArrowBackIosOutlined
          onClick={() => {
            handleSlide("right")
          }}
          className="arrow shadow-sm"
        />

        <PauseCircleFilled
          onClick={() => {
            handleSlide("left")
          }}
          className="  arrow "
        />

        <PlayArrowRounded />

        <ArrowForwardIosOutlined
          onClick={() => {
            handleSlide("left")
          }}
          className="  arrow "
        />
      </div>
      <h4 className="text-center high-paying-jobs-title">High Paying Jobs</h4>
      <div className="slider ">
        {loadingJobs && (
          <Spinner
            className=" slider-spinner col-12"
            animation="grow"
            role="status"
          />
        )}
        {highPayingJobs &&
          highPayingJobs?.slice(0, 4)?.map((job) => {
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
                  <header>
                    <div className="hight-pay-job-img-container">
                      <img
                        src={profile}
                        alt="profile-img "
                        className="hight-pay-job-img"
                      />
                    </div>
                    <h2 className="high-pay-job-title">
                      {" "}
                      <span className="text-primary">{job?.shift} - </span>
                      {job?.title}
                    </h2>
                  </header>
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
                <button className="btn btn-outline-dark btn-lg">
                  View Details
                </button>
                {/* <div className="card-body ">{}</div> */}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default TopProfiles;
