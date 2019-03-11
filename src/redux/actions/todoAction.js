import { createActions } from "redux-actions";
export let nextTodoId = 0;

/**在这里约定todo 的action type */
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_FILTER = "SET_FILTER";
const TEST = "TEST";

export const todoTypes = { ADD_TODO, TOGGLE_TODO, SET_FILTER, TEST };

export default createActions({
  ADD_TODO: content => {
    return {
      id: ++nextTodoId,
      content
    };
  },
  TOGGLE_TODO: id => {
    return {
      id
    };
  },
  TEST: () => {
    return {};
  }
});
