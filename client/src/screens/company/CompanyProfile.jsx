import "./company.css";
 import CompanyHeader from "../../components/company_components/CompanyHeader"
 import CompanyMiddle from "../../components/company_components/CompanyMiddle"
 import AboutCompany from "../../components/company_components/AboutCompany"
 import OtherOffers from "../../components/company_components/OtherOffers"

 function CompanyProfile({ company, showOverlay, setShowOverlay }) {
   return (
     <div className="co-proifle row ">
       {showOverlay && <div className="overlay"> </div>}
       <CompanyHeader
         company={company}
         showOverlay={showOverlay}
         setShowOverlay={setShowOverlay}
       />
       <CompanyMiddle company={company} />
       {/* <OtherOffers company={company} />
       <AboutCompany company={company} /> */}
     </div>
   )
 }

export default CompanyProfile;
