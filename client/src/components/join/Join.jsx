import "./join.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { logOut } from "../../api_Calls/authCalls"
import { authContext } from "../../context/auth_context/authContext"
function Join({ openNav }) {
  const { user, dispatch } = useContext(authContext)
  return (
    <>
      {!user ? (
        <div className={openNav ? "move-join join-btns" : " join-btns"}>
          {" "}
          <Link to="login" className="link log-in ">
            Log in
          </Link>{" "}
          <Link to="register" className="link sign-up">
            Sign up
          </Link>
        </div>
      ) : (
        <>
          <Link
            to="/"
            className="link text-white logout"
            onClick={() => logOut(dispatch)}
          >
            Logout
          </Link>
        </>
      )}
    </>
  )
}

export default Join
