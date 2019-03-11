// import { delay } from "redux-saga";
import todoActionTypes from "../../actions/todo/types";
import { put, takeEvery } from "redux-saga/effects";

export function* fetchProject() {
  // yield DELAY(1000);
  // yield put({ type: "TOGGLE_TODO" });
}

export default function* todoSaga() {
  yield takeEvery(todoActionTypes.ADD_TODO, fetchProject);
}
