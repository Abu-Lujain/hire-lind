import CompanyPhotoSlider from "./CompanyPhotoSlider";
import CompanyTitle from "./CompanyTitle";

function CompanyHeader() {
  return (
    <div className="company-top col-12 m-auto row">
      <CompanyTitle />

      <CompanyPhotoSlider />
    </div>
  );
}

export default CompanyHeader;
