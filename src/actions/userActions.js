import { USER } from "./types";

export function requestSignIn(user, password) {
  return { type: USER.SIGNIN_REQUEST, user, password };
}
export function requestSignUp(user) {
  return { type: USER.SIGNUP_REQUEST, user };
}
