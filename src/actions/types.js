import { createActionTypes } from "../utils";

export const USER = createActionTypes("GRAPHQL_API", ["SIGNIN_REQUEST"]);
export const LANG = createActionTypes("LANG", ["CHANGE"]);
