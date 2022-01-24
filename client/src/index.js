import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/auth_context/authContext";
import ProfileContextProvider from "./context/profile_context/profileContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfileContextProvider>
        <App />
      </ProfileContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
