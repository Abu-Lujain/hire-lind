import { useContext, useEffect, useState } from "react"
import { CloseRounded, AddBox, Edit } from "@material-ui/icons"
// import { Edit } from "@material-ui/icons/Edit";
// import { AddBox } from "@material-ui/icons/AddBox";
import "./styles/header.css"
import { AddToProfile } from "../../api_Calls/companyCall"
import { companyContext } from "../../context/company_context/companyContext"
import CompanyName from "./CompanyName"
import { authContext } from "../../context/auth_context/authContext"
import { useFetch } from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"
function CompanyTitle({ setShowOverlay }) {
  const [showForm, setShowForm] = useState(false)
  const [values, setValues] = useState("")
  const { dispatch, company: currentCompany } = useContext(companyContext)
  const { user } = useContext(authContext)
  const { pathname } = useLocation()
  const id = pathname.split("/").pop()
  const {
    data: company,
    loading,
    setFetcher,
    fetcher,
  } = useFetch(`/companiesProfiles/${id}`)

  const body = {
    values,
  }
  const handleAddValues = (e) => {
    e.preventDefault()
    AddToProfile(body, dispatch)
    setFetcher(!fetcher)
    closeValuesFormHandler()
    // window.location.reload()
  }
  const openValuesFormHandler = () => {
    setShowOverlay(true)
    setShowForm(true)
  }
  const closeValuesFormHandler = () => {
    setShowOverlay(false)
    setShowForm(false)
  }
  const authorized = user?._id === company?.user
  console.log(user?._id, company?.user)
  return (
    <>
      {showForm && (
        <form className="add-values-form" onSubmit={handleAddValues}>
          <h6 className="text-success">Company's Values</h6>

          <CloseRounded
            className="close-values-form"
            onClick={closeValuesFormHandler}
          />
          {/* <label>Write The Values of your Company</label> */}

          <textarea
            name="values"
            cols="30"
            defaultValue={company?.values}
            onChange={(e) => setValues(e.target.value)}
            rows="10"
          />
          <input
            type="submit"
            value="Add Values"
            className="btn btn-success btn-sm add-value-submit"
          />
        </form>
      )}
      <div className=" company-logo col-12 col-md-4 row">
        <CompanyName company={company} setShowOverlay={setShowOverlay} />
        {/* value form */}

        <div className="moto col-12 row">
          <div className="header col-12 row">
            <h6 className="col-9">Our Values and Vistion</h6>
            {user && authorized && (
              <div className="settings-box col-3">
                {!company?.values ? (
                  <AddBox
                    className="settings-icon"
                    onClick={openValuesFormHandler}
                  />
                ) : (
                  <Edit
                    className="settings-icon"
                    onClick={openValuesFormHandler}
                  />
                )}
              </div>
            )}
          </div>

          {!company?.values ? (
            <div className="no-comapny-values-message">
              <h4>
                Add your comapany values and mission here{" "}
                <span className="note">50 words required</span>
              </h4>{" "}
              <div className="small text-muted">
                Stating your Company Values Clearly really helps you gain a
                better reputaion for your firm. Here are some links to learn
                more about company values importance <br />
                <a href="/">
                  {" "}
                  the significance of clear Company Value statement
                </a>
              </div>
            </div>
          ) : (
            <p className="moto-body col-12">
              {company?.values && company?.values}
            </p>
          )}
        </div>
      </div>{" "}
    </>
  )
}

export default CompanyTitle
