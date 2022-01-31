import { AddBox, Edit, CloseRounded } from "@material-ui/icons";
import "./styles/header.css";
import logo from "../../assets/logo.jpg";
import { useState } from "react";
function CompanyTitle({ setShowOverlay }) {
  const [showForm, setShowForm] = useState(false);
  const company = {
    values: false,
  };
  const openValuesFormHandler = () => {
    setShowOverlay(true);
    setShowForm(true);
  };
  const closeValuesFormHandler = () => {
    setShowOverlay(false);
    setShowForm(false);
  };
  return (
    <>
      {showForm && (
        <form className="add-values-form">
          <CloseRounded
            className="close-values-form"
            onClick={closeValuesFormHandler}
          />
          {/* <label>Write The Values of your Company</label> */}
          <textarea name="values" cols="30" rows="10" />
          <input
            type="submit"
            value="Add Value"
            className="btn btn-success btn-sm add-value-submit"
          />
        </form>
      )}
      <div className=" company-logo col-12 col-md-4 row">
        <div className="col-12 row">
          <img src={logo} alt="" className="logo col-3 " />
          <div className="comapny-title col-9 ">
            <h5 className="company-title">
              Hire Land Software Comapny Comapny
            </h5>
          </div>
        </div>
        {/* value form */}

        <div className="moto col-12 row">
          <div className="header col-12 row">
            <h6 className="col-9">Our Values and Vistion</h6>
            <div className="settings-box col-3">
              {!company.values && (
                <AddBox
                  className="settings-icon"
                  onClick={openValuesFormHandler}
                />
              )}
              {company.values && <Edit className="settings-icon" />}
            </div>
          </div>

          {!company.values ? (
            <div className="no-comapny-values-message">
              <h4>
                Add your comapany values and mission here{" "}
                <span className="note">50 words required</span>
              </h4>{" "}
              <div className="small text-muted">
                Stating your Company Values Clearly really helps you gain a
                better reputaion for your firm. Here are some links to learn
                more about company values importance <br />
                <a href="#">
                  {" "}
                  the significance of clear Company Value statement
                </a>
              </div>
            </div>
          ) : (
            <p className="moto-body col-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              cum numquam voluptatem voluptatibus dolorem blanditiis rem magnam
              vel eveniet quidem perspiciatis architecto nisi voluptatum illum
              esse, omnis porro autem sunt. In dolores tenetur similique atque,
              quo facere adipisci impedit quia reprehenderit, libero asperiores
              deleniti quaerat at inventore maxime, porro repudiandae.
            </p>
          )}
        </div>
      </div>{" "}
    </>
  );
}

export default CompanyTitle;
