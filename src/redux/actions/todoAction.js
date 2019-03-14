import { createActions } from "redux-actions";
export let nextTodoId = 0;

/**在这里约定todo 的action type */
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_FILTER = "SET_FILTER";
const TEST = "TEST";
const TEST_SAGA_SUCCESS = "TEST_SAGA_SUCCESS";
const REMOVE_ALL = "REMOVE_ALL";

export const todoTypes = {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  TEST,
  REMOVE_ALL,
  TEST_SAGA_SUCCESS
};

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
  TEST: () => {},
  REMOVE_ALL: () => {}
});
