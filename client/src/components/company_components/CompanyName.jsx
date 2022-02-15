import { useContext, useState } from "react"
import { companyContext } from "../../context/company_context/companyContext"
import logo from "../../assets/logo.jpg"
import { AddBox, Edit, CloseRounded } from "@material-ui/icons"
import "./styles/name.css"
import { AddToProfile } from "../../api_Calls/companyCall"
import { authContext } from "../../context/auth_context/authContext"
import axios from "axios"
import { useFetch } from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"
function CompanyName({ setShowOverlay }) {
  const [openForm, setOpenForm] = useState(false)
  const [name, setCompanyName] = useState(false)
  const { user } = useContext(authContext)
  const { dispatch, company: currentCompany } = useContext(companyContext)
  const { pathname } = useLocation()
  const id = pathname.split("/").pop()
  const {
    data: company,
    loading,
    setFetcher,
    fetcher,
  } = useFetch(`/companiesProfiles/${id}`)
  const body = { name }
  const handleAddValues = (e) => {
    e.preventDefault()
    AddToProfile(body, dispatch)
    setFetcher(!fetcher)
    closeValuesFormHandler()
  }
  const openValuesFormHandler = () => {
    setShowOverlay(true)
    setOpenForm(true)
  }
  const closeValuesFormHandler = () => {
    setShowOverlay(false)
    setOpenForm(false)
  }
  const authorized = user?._id === company?.user

  return (
    <div className="col-12 row company-name">
      {openForm && (
        <form className="edit-name-form" onSubmit={handleAddValues}>
          <h6 className="text-success">Company's Name</h6>
          <CloseRounded
            className="close-values-form"
            onClick={closeValuesFormHandler}
          />
          <input name="name" onChange={(e) => setCompanyName(e.target.value)} />
          <input
            type="submit"
            value="Add Values"
            className="btn btn-success btn-sm add-value-submit"
          />
        </form>
      )}
      <img src={logo} alt="" className="logo col-3 " />

      <div className="name comapny-title col-8">
        {company && !company.name ? (
          <>
            {" "}
            <small className="text-danger">
              Please Add Your Company's Name
            </small>
            {user?._id === company?.user && (
              <AddBox
                className="settings-icon name-icon"
                onClick={openValuesFormHandler}
              />
            )}
          </>
        ) : (
          <>
            {" "}
            <h5 className="company-title">{company && company.name}</h5>
            {user && authorized && (
              <Edit
                className="settings-icon name-icon"
                onClick={openValuesFormHandler}
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default CompanyName
