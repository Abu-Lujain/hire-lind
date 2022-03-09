import CompanyPhotoSlider from "./CompanyPhotoSlider"
import CompanyTitle from "./CompanyTitle"
function CompanyHeader({
  setFetcher,
  fetcher,
  company,
  setShowOverlay,
  showOverlay,
}) {
  return (
    <div className="company-top col-12 m-auto row row mb-3">
      <CompanyTitle
        fetcher={fetcher}
        setFetcher={setFetcher}
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
