import { createActionTypes } from "../utils";

export const USER = createActionTypes("API", [
  "SIGNIN_REQUEST",
  "SIGNUP_REQUEST",
  "SIGNUP_SUCCESS",
  "SIGNUP_FAILURE",

  "TOGGLE_THANK_MODAL",
  "TOGGLE_OOPS_MODAL"
]);
export const LANG = createActionTypes("LANG", ["CHANGE"]);
