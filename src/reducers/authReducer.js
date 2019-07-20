import { types } from "../actions";
const { USER } = types;

const initialState = {
  signedIn: true,
  loading: false,
  visibleThankModal: false,
  visibleOopsModal: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER.SIGNIN_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case USER.SIGNUP_REQUEST: {
      console.log("signup reducer", action.user);
      return {
        ...state,
        loading: true
      };
    }
    case USER.SIGNUP_SUCCESS: {
      return {
        ...state,
        visibleThankModal: true,
        loading: false
      };
    }
    case USER.SIGNUP_FAILURE: {
      console.log("signup failure", action.status);
      return {
        ...state,
        visibleOopsModal: action.status === 500,
        loading: false
      };
    }
    case USER.TOGGLE_THANK_MODAL: {
      return {
        ...state,
        visibleThankModal: !state.visibleThankModal
      };
    }
    case USER.TOGGLE_OOPS_MODAL: {
      return {
        ...state,
        visibleOopsModal: !state.visibleOopsModal
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
