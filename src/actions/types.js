import { createActionTypes } from "../utils";

export const USER = createActionTypes("GRAPHQL_API", [
  "SIGNIN_REQUEST",
  "SIGNUP_REQUEST",
  "SIGNUP_SUCCESS",
  "SIGNUP_FAILURE"
]);
export const LANG = createActionTypes("LANG", ["CHANGE"]);
