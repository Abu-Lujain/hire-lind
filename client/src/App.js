import "./index.css"
import { useState, useContext, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Profile from "./screens/profile/Profile"
import Login from "./screens/authUI/Login"
import Register from "./screens/authUI/Register"
import TopBar from "./components/topbar/TopBar"
import setAuthToken from "./api_Calls/setAuthToken"
import { authContext } from "./context/auth_context/authContext"
import { loadUserCall } from "./api_Calls/authCalls"
import HomeScreen from "./screens/home/HomeScreen"
import PostJob from "./components/jobs/PostJob"
import SingleJob from "./components/jobs/SingleJob"
import EditedJob from "./components/jobs/EditedJob"
import { companyContext } from "./context/company_context/companyContext"
import { createCompany, loadCompany } from "./api_Calls/companyCall"
import CreateCompany from "./components/company_components/CreateCompany"
import Company from "./screens/profile/Company"
import { createProfile, fetchProfile } from "./api_Calls/profileCalls"
import { profileContext } from "./context/profile_context/profileContext"
  // setting auth token
if (localStorage.token) setAuthToken(localStorage.token)
const App = () => {
  const [openNav, setOpenNav] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const { dispatch: CompanyDispatch, company } = useContext(companyContext)
  const { dispatch, user } = useContext(authContext)
  const { dispatch: profileDispatch, profile } = useContext(profileContext)
  useEffect(() => {
    loadUserCall(dispatch)
  }, [dispatch])
  useEffect(() => {
    user && createCompany({ name: user.userName }, CompanyDispatch)
    loadCompany(CompanyDispatch)
  }, [CompanyDispatch])
  useEffect(() => {
    fetchProfile(profileDispatch)
    !profile && createProfile(profileDispatch)
  }, [profileDispatch])

  return (
    <div
      className="App"
      onClick={() => {
        if (openNav) {
          setOpenNav(!openNav)
        }
      }}
    >
      <BrowserRouter>
        <TopBar openNav={openNav} setOpenNav={setOpenNav} />
        <Switch>
          {" "}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/job/:id">
            <SingleJob />
          </Route>
          <Route exact path="/edit/:id">
            <EditedJob />
          </Route>
          <Route path="/post-job">
            <PostJob />
          </Route>
          <Route exact path="/">
            {" "}
            <HomeScreen user={user} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/create">
            <CreateCompany />
          </Route>
          <Route path="/profile/:id">
            {" "}
            <Profile
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          </Route>
          <Route path="/company/:id">
            <Company
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
