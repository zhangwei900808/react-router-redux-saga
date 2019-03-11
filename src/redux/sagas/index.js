import { all, fork } from "redux-saga/effects";
import todoSaga from "./todo/todoSaga";

/*添加对action的监听 */
export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
