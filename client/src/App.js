import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// styles
import "./index.css";
import Profile from "./screens/profile/Profile";
import Login from "./components/authUI/Login";
import HomeScreen from "./screens/HomeScreen";
import Register from "./components/authUI/Register";
import Topbar from "./components/topbar/Topbar";
// context
import setAuthToken from "./helpers/setAuthToken";
import { authContext } from "./context/authContext";
import { loadUserCall } from "./helpers/apiCalls";

/////////////////////////////////////////////////////////////////
// setting auth token
if (localStorage.token) setAuthToken(localStorage.token);
function App() {
  const [openNav, setOpenNav] = useState(false);
  // loading user
  const { dispatch, user, errors } = useContext(authContext);
  useEffect(() => {
    loadUserCall(dispatch);
  }, []);
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
        <Topbar openNav={openNav} setOpenNav={setOpenNav} />
        <Switch>
          {" "}
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            {" "}
            <HomeScreen />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/me">
            <Profile user={user} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
