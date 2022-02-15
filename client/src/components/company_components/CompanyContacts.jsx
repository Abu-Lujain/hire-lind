import {
  AddBoxOutlined,
  CloseRounded,
  Edit,
  EmailOutlined,
  PhoneCallback,
} from "@material-ui/icons"
import "./styles/contacts.css"
import { companyContext } from "../../context/company_context/companyContext"
import { AddToProfile } from "../../api_Calls/companyCall"
import { useEffect, useContext, useState } from "react"
import { authContext } from "../../context/auth_context/authContext"
import { useFetch } from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"
function CompanyContacts({ setShowOverlay }) {
  const [showForm, setShowForm] = useState(false)
  const [phones, setPhones] = useState([])
  const [emails, setEmails] = useState([])
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
  console.log(company, loading)
  const addContactsHandler = (e) => {
    e.preventDefault()
    const body = {
      contacts: {
        emails: emails.split(",").map((email) => email.trim()),
        phones: phones.split(",").map((phone) => phone.trim()),
      },
    }
    AddToProfile(body, dispatch)
    setFetcher(fetcher)
    closeContactsForm()
  }
  const closeContactsForm = () => {
    setShowOverlay(false)
    setShowForm(false)
  }
  const showContactsForm = () => {
    console.log(showForm)
    setShowForm(true)
    setShowOverlay(true)
  }
  const authorized = user?._id === company?.user

  return (
    <div className="contacts col-12  ">
      <div className="text-warning">Contacs: </div>
      {company?.contacts?.emails < 1 && company?.contacts?.phones < 1 ? (
        <>
          {authorized ? (
            <div className="text-center small">
              Please Add your Comapany Phone Numbers and the Emails... Click
              here to add{" "}
              <AddBoxOutlined
                className="contacts-icon"
                onClick={showContactsForm}
              />
            </div>
          ) : (
            <div className="text-white text-center spacing">
              {company && company?.name} Did't Add Any Contacts!
            </div>
          )}
        </>
      ) : (
        <>
          <div className="contacts-container">
            <span>
              {company &&
                company?.contacts?.phones?.map((phone) => {
                  return (
                    <span key={phone}>
                      <PhoneCallback className="phone-icon" />
                      <a className="m-2 link" href={`tel:${phone}`}>
                        {phone}
                      </a>
                    </span>
                  )
                })}
            </span>
            <span className="email">
              {company &&
                company?.contacts?.emails?.map((email) => {
                  return (
                    <span key={email}>
                      <EmailOutlined className="email-icon" />
                      <a className="m-2 link" href={`mailto:${email}`}>
                        {email}
                      </a>
                    </span>
                  )
                })}
            </span>
            {authorized && (
              <Edit className="contacts-icon" onClick={showContactsForm} />
            )}
          </div>
        </>
      )}
      {showForm && (
        <form className="contacts-form" onSubmit={addContactsHandler}>
          {/* autoComplete="off" */}
          <CloseRounded
            className="close-values-form"
            onClick={closeContactsForm}
          />
          <label className="text-success">your company's Contacts</label>
          <small className="text-muted note">
            <span className="title"> Note* </span> separate emails and phones
            with comma e.g. x@gmail.com, y@gmail.com.
          </small>
          <label> Phones</label>
          <input
            type="text"
            name="phones"
            required
            className="text-center"
            defaultValue={company?.contacts?.phones?.map((phone) => {
              return phone
            })}
            onChange={(e) => setPhones(e.target.value)}
            placeholder="965717288, 6993387396"
          />
          <label>Emails </label>
          <input
            type="text"
            className="text-center"
            defaultValue={company?.contacts?.emails?.map((email) => {
              return email
            })}
            onChange={(e) => setEmails(e.target.value)}
            name="emails"
            required
            placeholder="something@gmail.com"
          />
          <button className="btn btn-sm btn-success m-2">Add Contacts</button>
        </form>
      )}
    </div>
  )
}

export default CompanyContacts
