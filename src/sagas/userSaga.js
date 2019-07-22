import { call, put, takeLatest, all } from "redux-saga/effects";
import { types } from "../actions";
import { ApiManager } from "../apis/apimanager";
const { USER } = types;

function* signInRequest() {}
function* signUnRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  console.log(action);

  try {
    const res = yield call(ApiManager.SignUp, headers, action.user);
    const data = res.data;
    yield put({ type: USER.SIGNUP_SUCCESS });
    // action.subscribe({
    //   EMAIL: action.user.email,
    //   NAME: action.user.fullname
    // });
  } catch (e) {
    console.log(e);
    const status = e.response.status;

    yield put({ type: USER.SIGNUP_FAILURE, status });
  }
}

function* userSaga() {
  yield all([takeLatest(USER.SIGNIN_REQUEST, signInRequest)]);
  yield all([takeLatest(USER.SIGNUP_REQUEST, signUnRequest)]);
}

export default userSaga;
