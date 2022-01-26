import { createContext, useReducer } from "react";
import companyReducer from "./companyReducer";
const initialState = {
  company: null,
  isFetching: false,
  companyErrors: null,
};
export const companyContext = createContext(initialState);
const CompanyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(companyReducer, initialState);
  return (
    <companyContext.Provider
      value={{
        company: state.company,
        isFetching: state.isFetching,
        companyErrors: state.companyErrors,
        dispatch,
      }}
    >
      {children}
    </companyContext.Provider>
  );
};
export default CompanyContextProvider;
