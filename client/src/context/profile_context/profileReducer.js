import { types } from "../types";
export default function authReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_PROFILE_START:
    case types.ADDING_PROFILE_START:
    case types.LOAD_PROFILE_START:
    case types.UPDATE_PROFILE_START:
    case types.ADD_EXPERIENCE_START:
      return {
        profile: null,
        isFetching: true,
        profileErrors: false,
      };
    case types.CREATE_PROFILE_SUCCESS:
    case types.UPDATE_PROFILE_SUCCESS:
    case types.ADDING_PROFILE_SUCCESS:
    case types.ADD_EXPERIENCE_SUCCESS:
    case types.LOAD_PROFILE_SUCCESS:
      return {
        profile: payload,
        isFetching: false,
        profileErrors: false,
      };

    case types.ADD_EXPERIENCE_FAILURE:
      console.log(state);
      return {
        ...state,
        profile: state.profile,
        isFetching: false,
        profileErrors: payload,
      };

    default:
      return state;
  }
}
