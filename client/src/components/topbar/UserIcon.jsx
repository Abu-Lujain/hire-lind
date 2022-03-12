import React from "react"
import { Link } from "react-router-dom"

function UserIcon({ candidate, PF, user, profile, company }) {
  return (
    <div className="user-info">
      <li>
        <Link
          to={`/${
            candidate ? "profile/" + profile?._id : "company/" + company?._id
          }`}
          className="px-3 link"
        >
          <img
            src={`${PF}${user?.photo}`}
            className="profile-icon"
            alt="profile"
          />
        </Link>
      </li>
      <li>{user?.userName}</li>
    </div>
  )
}

export default UserIcon
