import { combineReducers } from "redux";
import authReducer from "./authReducer";
import langReducer from "./langReducer";

const appReducer = asyncReducers =>
  combineReducers({
    authentication: authReducer,
    langReducer: langReducer,
    ...asyncReducers
  });

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers);
}

export default rootReducer;
