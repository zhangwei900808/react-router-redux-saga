import { call, put, takeEvery } from "redux-saga/effects";
import { todoTypes } from "../actions/todoAction";
import Apis from "../../apis";

function* fetchData(action) {
  try {
    const data = yield call(Apis.getCategory);

    // 创建redux action，相当于dispatch，这点千万要注意
    yield put({ type: todoTypes.TEST_SAGA_SUCCESS, response: data });
  } catch (ex) {
    console.log("error=", ex);
  }
}

export default function* watchTodo() {
  yield takeEvery(todoTypes.TEST, fetchData);
}
