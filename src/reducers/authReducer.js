import { types } from "../actions";
const { USER } = types;

const initialState = {
  signedIn: true,
  loading: false
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
        loading: false
      };
    }
    case USER.SIGNUP_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
