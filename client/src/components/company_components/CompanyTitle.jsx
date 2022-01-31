import { AddBox, Edit } from "@material-ui/icons";
import "./styles/header.css";
import logo from "../../assets/logo.jpg";
function CompanyTitle() {
  const valueAndMoto = true;
  return (
    <div className=" company-logo col-12 col-md-4 row">
      <div className="col-12 row">
        <img src={logo} alt="" className="logo col-3 " />
        <div className="comapny-title col-9 ">
          <h5 className="company-title">Hire Land Software Comapny Comapny</h5>
        </div>
      </div>
      <div className="moto col-12 row">
        <div className="header col-12 row">
          <h6 className="col-9">Our Values and Vistion</h6>
          <div className="settings-box col-3">
            {!valueAndMoto && <AddBox className="settings-icon" />}
            {valueAndMoto && <Edit className="settings-icon" />}
          </div>
        </div>

        <p className="moto-body col-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cum
          numquam voluptatem voluptatibus dolorem blanditiis rem magnam vel
          eveniet quidem perspiciatis architecto nisi voluptatum illum esse,
          omnis porro autem sunt. In dolores tenetur similique atque, quo facere
          adipisci impedit quia reprehenderit, libero asperiores deleniti
          quaerat at inventore maxime, porro repudiandae.
        </p>
      </div>
    </div>
  );
}

export default CompanyTitle;
