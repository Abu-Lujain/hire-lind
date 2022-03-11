import "./company.css";
 import CompanyHeader from "../../components/company_components/CompanyHeader"
 import CompanyMiddle from "../../components/company_components/CompanyMiddle"
import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { axiosInstance } from "../../config/axiosInstance"
import { useState, useEffect } from "react"

function CompanyProfile({ showOverlay, setShowOverlay }) {
  const [loading, setLoading] = useState(false)
  const [company, setCompany] = useState(null)
  const [fetcher, setFetcher] = useState(false)

  const { pathname } = useLocation()
  const id = pathname.split("/")[2]
  console.log(id)
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const res = await axiosInstance.get("/companiesProfiles/" + id)
        res.data && setLoading(false)
        console.log(res.data)
        setCompany(res.data)
      } catch (error) {
        console.log(error.response)
      }
    }
    fetchData()
  }, [fetcher])
  return (
    <div className=" profile-parent">
      <div className="co-proifle row ">
        {showOverlay && <div className="overlay"> </div>}
        <CompanyHeader
          fetcher={fetcher}
          setFetcher={setFetcher}
          company={company}
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
        />
        <CompanyMiddle company={company} />
        {/* <OtherOffers company={company} />
       <AboutCompany company={company} /> */}
      </div>
    </div>
  )
}

export default CompanyProfile;
