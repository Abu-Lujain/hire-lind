import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./context/auth_context/authContext";
import ProfileContextProvider from "./context/profile_context/profileContext";
import CompanyContextProvider from "./context/company_context/companyContext";
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfileContextProvider>
        <CompanyContextProvider>
          <App />
        </CompanyContextProvider>
      </ProfileContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
