// import { delay } from "redux-saga";
import { todoTypes } from "../../actions/todoAction";
import { put, takeEvery } from "redux-saga/effects";

export function* fetchProject() {
  // yield DELAY(1000);
  // yield put({ type: "TOGGLE_TODO" });
}

export default function* todoSaga() {
  yield takeEvery(todoTypes.TEST, fetchProject);
}
