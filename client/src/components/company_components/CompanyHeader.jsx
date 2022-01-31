import CompanyPhotoSlider from "./CompanyPhotoSlider";
import CompanyTitle from "./CompanyTitle";

function CompanyHeader({ setShowOverlay, showOverlay }) {
  return (
    <div className="company-top col-12 m-auto row">
      <CompanyTitle showOverlay={showOverlay} setShowOverlay={setShowOverlay} />

      <CompanyPhotoSlider />
    </div>
  );
}

export default CompanyHeader;
