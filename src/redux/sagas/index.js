// import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* fetchProject() {
  // yield delay(1000);
  // yield put({ type: "TOGGLE_TODO" });
}

export default function* rootSaga() {
  yield takeEvery("ADD_TODO", fetchProject);
}
