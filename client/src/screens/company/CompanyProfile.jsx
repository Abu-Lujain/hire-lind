import "./company.css";
 import CompanyHeader from "../../components/company_components/CompanyHeader"
 import CompanyMiddle from "../../components/company_components/CompanyMiddle"
 import AboutCompany from "../../components/company_components/AboutCompany"
 import OtherOffers from "../../components/company_components/OtherOffers"
import { useLocation } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

function CompanyProfile({ showOverlay, setShowOverlay }) {
  const { pathname } = useLocation()
  const id = pathname.split("/").pop()
  const {
    data: company,
    loading,
    setFetcher,
    fetcher,
  } = useFetch(`/companiesProfiles/${id}`)
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
