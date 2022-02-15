// import { useContext } from "react"
// import { companyContext } from "../../context/company_context/companyContext"
// import { useEffect } from "react"
import CompanyPhotoSlider from "./CompanyPhotoSlider"
import CompanyTitle from "./CompanyTitle"
function CompanyHeader({ company, setShowOverlay, showOverlay }) {
  // const { company, dispatch } = useContext(companyContext);
  // console.log(company);
  // useEffect(() => {
  //   Add
  // })
  return (
    <div className="company-top col-12 m-auto row row mb-3">
      <CompanyTitle
        company={company}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
      <CompanyPhotoSlider
        company={company}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  )
}

export default CompanyHeader
