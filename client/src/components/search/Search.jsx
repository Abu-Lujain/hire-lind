import { Close } from "@material-ui/icons"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { authContext } from "../../context/auth_context/authContext"
import { companyContext } from "../../context/company_context/companyContext"
import "./search.css"

function Search() {
  const { user } = useContext(authContext)
  return (
    <div className="search-area mt-md-2  col-md-4 col-12">
      {" "}
      {user && user?.profileType === "company" ? (
        <Link to="post-job" className="link">
          <button className=" add-new-job-btn">post a new job</button>
        </Link>
      ) : (
        <Link to="post/create" className="link">
          <button className=" add-new-job-btn">create new post</button>
        </Link>
      )}
      <form className="input-form">
        <label>Search For jobs</label>
        <input type="search" className="search-input" />
      </form>
      <div className="latest-searches">
        <span>
          React and Node.js Job <Close className="hide-icon" />
        </span>
        <span>
          React and Node.js Job <Close className="hide-icon" />
        </span>
        <span>
          React and Node.js Job <Close className="hide-icon" />
        </span>
        <span>
          React and Node.js Job <Close className="hide-icon" />
        </span>
      </div>
    </div>
  )
}

export default Search
