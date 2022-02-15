import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import CompanyProfile from "../company/CompanyProfile"

function Company({ showOverlay, setShowOverlay }) {
  const [company, setCompany] = useState(null)
  const { pathname } = useLocation()
  const id = pathname.split("/").pop()
  useEffect(() => {
    async function fetchCo() {
      try {
        const response = await axios.get(`/companiesProfiles/${id}`)
        setCompany(response.data)
      } catch (error) {
        // console.log(error.response)
      }
    }
    fetchCo()
  }, [])
  // console.log("company: ", company)
  return (
    <div className=" profile-parent">
      <CompanyProfile
        company={company}
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
      />
    </div>
  )
}

export default Company
