import { types } from "../actions";
const { LANG } = types;

const initialState = {
  currentLang: "en"
};

function langReducer(state = initialState, action) {
  switch (action.type) {
    case LANG.CHANGE: {
      // console.log(action);
      return {
        ...state,
        currentLang: action.newLang
      };
    }
    default: {
      return state;
    }
  }
}

export default langReducer;
