import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// styles
import "./index.css";
import Profile from "./screens/profile/Profile";
import Login from "./screens/authUI/Login";
import Register from "./screens/authUI/Register";
import TopBar from "./components/topbar/TopBar";
// context
import setAuthToken from "./api_Calls/setAuthToken";
import { authContext } from "./context/auth_context/authContext";
import { loadUserCall } from "./api_Calls/authCalls";
import HomeScreen from "./screens/home/HomeScreen";
/////////////////////////////////////////////////////////////////
// setting auth token
if (localStorage.token) setAuthToken(localStorage.token);
const App = () => {
  const { dispatch, user } = useContext(authContext);
  const [openNav, setOpenNav] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  // loading user
  useEffect(() => {
    loadUserCall(dispatch);
  }, [dispatch]);

  return (
    <div
      className="App"
      onClick={() => {
        if (openNav) {
          setOpenNav(!openNav);
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
          <Route exact path="/">
            {" "}
            <HomeScreen user={user} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            {" "}
            <Profile
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
