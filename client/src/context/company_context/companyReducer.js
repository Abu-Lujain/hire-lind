import { types } from "../types";
export default function companyReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    // @ case start
    case types.CREATE_COMPANY_START:
      return {
        ...state,
        company: null,
        isFetching: true,
        companyErrors: false,
      };
    // @ case success
    case types.CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        company: payload,
        isFetching: false,
        companyErrors: false,
      };
    case types.CREATE_COMPANY_FAILURE:
      return {
        ...state,
        isFetching: false,
        companyErrors: payload,
      };

    default:
      return state;
  }
}
