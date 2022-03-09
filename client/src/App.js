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
import { createProfile, fetchProfile } from "./api_Calls/profileCalls"
import { profileContext } from "./context/profile_context/profileContext"
import Create from "./components/posts/Create"
import JobApplication from "./screens/job_application/JobApplication"
import CompanyProfile from "./screens/company/CompanyProfile"
// setting auth token
const App = () => {
  if (localStorage.token) setAuthToken(localStorage.token)
  const [openNav, setOpenNav] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const { dispatch: CompanyDispatch } = useContext(companyContext)
  const { dispatch, user } = useContext(authContext)
  const { dispatch: profileDispatch, profile } = useContext(profileContext)
  useEffect(() => {
    loadUserCall(dispatch)
    createCompany({}, CompanyDispatch)
    loadCompany(CompanyDispatch)
    fetchProfile(profileDispatch)
    !profile && createProfile(profileDispatch)
  }, [dispatch, CompanyDispatch, profileDispatch, localStorage.token])

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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/job/:id">
            <SingleJob />
          </Route>
          <Route path="/apply/:id">
            <JobApplication />
          </Route>
          <Route path="/edit/:id">
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
            <CompanyProfile
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          </Route>
          <Route path="/post/create">
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
