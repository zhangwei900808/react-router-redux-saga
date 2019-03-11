import { handleActions } from "redux-actions";
import todoActionTypes from "../actions/todo/types";

const initState = {
  allIds: [],
  byIds: {}
};

const todoReducer = handleActions(
  {
    [todoActionTypes.ADD_TODO]: (state, action) => {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    },
    [todoActionTypes.TOGGLE_TODO]: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
  },
  initState
);

export default todoReducer;
