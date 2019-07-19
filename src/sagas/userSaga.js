import { call, put, takeLatest, all } from "redux-saga/effects";
import { types } from "../actions";
const { USER } = types;

function* signInRequest() {}
function* signUnRequest() {}

function* userSaga() {
  yield all([takeLatest(USER.SIGNIN_REQUEST, signInRequest)]);
  yield all([takeLatest(USER.SIGNUP_REQUEST, signUnRequest)]);
}

export default userSaga;
