import { createActions } from "redux-actions";
import actionTypes from "./types";
export let nextTodoId = 0;

export default createActions({
  [actionTypes.ADD_TODO]: content => {
    return {
      id: ++nextTodoId,
      content
    };
  },
  [actionTypes.TOGGLE_TODO]: id => {
    return {
      id
    };
  }
});
